import express from "express"
import indexRoutes from "./routes/index.routes.js"
import employeesRoutes from "./routes/employees.routes.js"
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())

app.use(indexRoutes)
app.use("/api",employeesRoutes)

app.use((req,res)=>{
    res.status(404).json({
        message:"Not Found!"
    })
})
export default app;