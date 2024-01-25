import express from "express"
import { config } from "dotenv"
import cors from "cors"
config()

const app = express()

app.use(express.json())
app.use(cors())


const server = app.listen(process.env.PORT || 8080 , () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`)
})