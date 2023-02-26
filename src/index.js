import dotenv from "dotenv"
import express from "express"
import { mongoDatabase } from "./utils/mongoDatabase.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 9000


mongoDatabase.connect()


app.use(express.json())


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))

