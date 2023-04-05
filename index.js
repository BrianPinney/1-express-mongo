import express from 'express'
import cors from 'cors'
import { getAllPlants, addPlant, /*updatePlant*/ } from './src/plants.js'

const PORT = 3050
const app = express()
app.use(cors())
app.use(express.json())

app.get('/plants', getAllPlants)
app.post('/plants', addPlant)
// app.patch('/updatePlant', updatePlant)

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}...`)
})