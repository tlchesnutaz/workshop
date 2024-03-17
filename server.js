const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://tlchesnutaz:ovSCY3i1OncRjrjK@cluster0.cnpazqz.mongodb.net/', (err) => {
    console.log('Connected to the DB', err)
})

app.use('/api/posts', require('./routes/postRouter'))

// error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log(`Server is running on local port 8000`)
})