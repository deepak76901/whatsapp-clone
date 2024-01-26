import express from "express"
import { config } from "dotenv"
import cors from "cors"
import AuthRoutes from "./routes/AuthRoutes.js"
config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/auth",AuthRoutes)


const server = app.listen(process.env.PORT || 8080 , () => {
    console.log(`Server is listening on http://localhost:${process.env.PORT}`)
})