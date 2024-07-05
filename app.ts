import express from 'express'

const app = express()
const PORT=3000


app.get('/test', (req,res) => {
    res.status(200).json({
        status:"Success",
        msg:"Test"
    })
})
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
