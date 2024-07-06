import mongoose from 'mongoose'
import { empSchema } from './mongoDbSchemas/empSchema'
import {APIResponse,ErrResponse} from './utils/statusMessages'

export const getData =  async(req, res) => {
    await empSchema.find({})
    .then((result:any) => {
        if(result.length > 0){
            res.status(200).send(new APIResponse(200,"Data Available", result))
        }else{
            res.status(201).send(new APIResponse(201,"Data not Available", result))
        }
    })
    .catch((e) => {
            res.status(400).send(new ErrResponse())
    })
}

export const createData = async(req, res) =>{
    const body = req.body
    await empSchema.insertMany(body)
    .then((result) => {
       res.status(200).send(new APIResponse())
    })
    .catch((e)=> {
       res.status(400).send(new ErrResponse())
    })
  }

export const updateData = async(req,res) => {
    const body = req.body
    await empSchema.updateOne({empno:body.empno}, {ename:body.ename, sal:body.sal})
    .then((result) => {
       res.status(200).send(new APIResponse())
    })
    .catch((e) => {
        res.status(400).send(new ErrResponse())
    })
}

export const deleteData =  async(req, res) => {
    const body = req.body
    await empSchema.deleteOne({empno:body.empno})
    .then((result) => {
       res.status(200).send(new APIResponse())
    })
    .catch((e) => {
        res.status(400).send(new ErrResponse())
    })

}