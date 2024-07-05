import mongoose from 'mongoose'

const uri = 'mongodb://127.0.0.1/testDB'

export function mongoconnection(){
    mongoose.connect(uri)
    .then(() => {
        console.log("DB is connected")
    })
    .catch((e) => {
        console.log("DB not connected")
    })
}