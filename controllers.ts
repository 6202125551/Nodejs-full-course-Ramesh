import mongoose from 'mongoose'
import { empSchema } from './mongoDbSchemas/empSchema'

export const getData =  async(req, res) => {
    await empSchema.find({})
    .then((result) => {
        if(result.length > 0){
            res.status(200).json({
                status:"Success",data:result
            })
        }else{
            res.status(201).json({
                status:"Success",
                msg: "Date not available"
            })
        }
    })
    .catch((e) => {
            res.status(400).json({
                status:"Failed",
                msg: "Error"
            })
    })
}

export const createData = async(req, res) =>{
    const body = req.body
    await empSchema.insertMany(body)
    .then((result) => {
       res.status(200).json({
          status:"success",
          msg: "Saved Successfully"
       })
    })
    .catch((e)=> {
       res.status(400).json({
          status:"Failed",
          msg:"Error"
       })
    })
  }

export const updateData = async(req,res) => {
    const body = req.body
    await empSchema.updateOne({empno:body.empno}, {ename:body.ename, sal:body.sal})
    .then((result) => {
       res.status(200).json({
        status:"success",
        data:result
       })
    })
    .catch((e) => {
        res.status(400).json({
            status:"Failed",
            Msg:"Failed to update the data"
        })
    })
}

export const deleteData =  async(req, res) => {
    const body = req.body
    await empSchema.deleteOne({empno:body.empno})
    .then((result) => {
       res.status(200).json({
           status:"Success",
           msg:"Data deleted successfully"
       })
    })
    .catch((e) => {
        res.status(400).json({
            status:"Failed",
            msg: "Failed to delete the data"
        })
    })

}