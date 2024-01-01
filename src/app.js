import express from "express"
import indexRoutes from "./routes/index.routes.js"
import employeesRoutes from "./routes/employees.routes.js"


const app = express()

app.use(express.json()) // Parse incoming requests data as JSON

app.use(indexRoutes)
app.use("/api",employeesRoutes)

app.use((req,res)=>{
    res.status(404).json({
        message:"Not Found!"
    })
})
export default app;