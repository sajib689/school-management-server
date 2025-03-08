import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

// database configuration
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(console.log('Connected to MongoDB')).catch(err => console.log(err))

// Sample Route
app.get('/', (req, res) => {
    res.send("Welcome to School Management API");
  });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
