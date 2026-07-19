import express from 'express'
import './config/dotenv.js'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res)=>{
    res.status(200).send('<h1>LeaseTrack APP</h1>')
})

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'LeaseTrack API is running',
    timestamp: new Date().toISOString()
  })
})

const PORT = process.env.PORT || 3012


app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})