import express from 'express'
import {mongoconnection} from './dbConnection'
import {router} from './routes'
const app = express()
const PORT=3000

mongoconnection()

app.use(express.json())
app.use('/api/v1/mongodb', router)

app.get('/test', (req,res) => {
    res.status(200).json({
        status:"Success",
        msg:"Test"
    })
})

// app.post('/create', )

// app.get('/get',)

// app.post('/update', )

// app.post('/delete',)




app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})
