import express from 'express'
import {mongoconnection} from './dbConnection'
const app = express()
const PORT=3000

mongoconnection()

app.get('/test', (req,res) => {
    res.status(200).json({
        status:"Success",
        msg:"Test"
    })
})
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
