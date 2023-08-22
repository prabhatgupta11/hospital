const express = require("express");
const cors = require('cors');
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors());

const {userRouter} = require("./routes/user.routes")
const {employeeRouter} = require("./routes/emp.routes")


const {connection} = require("./db")

app.get("/", (req,res) =>{
    res.send("Welcome")
})

app.use("/api", userRouter)
app.use("/api",employeeRouter)

app.listen(8080, async ()=>{
    try{
        await connection
        console.log("Connected to database")
    } catch(err){
        console.log(err.message)
    }
    console.log(`Server is running at 4500`)
})
