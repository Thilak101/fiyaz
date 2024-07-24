const express = require("express")
require("dotenv").config()
const PORT = 4000 || process.env.PORT
const apiRouter = require("./routes")
const app = express()
const connectDB = require("./config/db")


connectDB()
app.use(express.json())
app.use("/api", apiRouter)



app.listen(PORT, () => {
    console.log(`server was started on ${PORT} PORT`)
})