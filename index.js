import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()

// middelware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routes
app.get('/query', (req, res) => {
    res.json({
        status: 200,
        msg: 'Server Connected'
    })
})

app.listen(5000, () => console.log('Connected!'))