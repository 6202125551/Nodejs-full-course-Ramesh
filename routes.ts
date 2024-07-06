import express from 'express'
export const router = express.Router()

import { createData, deleteData, getData, updateData } from './controllers'

router.route('/get').get(getData)
router.route('/create').post(createData)
router.route('/update').put(updateData)
router.route('/delete').delete(deleteData)

