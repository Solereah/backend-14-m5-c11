import express, { json } from "express"
import { Request, Response } from "express"
import userRouter from "./routes/user-router"
import chartRouter from "./routes/chart-router"

const PORT = 43000
const app = express()

// ------------------ MIDDLEWARES ------------------ //
app.use(json())
// ------------------ ROUTERS ------------------ //
app.use("/api/charts", chartRouter)
app.use("/api/users", userRouter)

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({
    name: "API REST - ASTRO DB",
    version: "1.0.0",
    server: "running",
  })
})

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: "Resource not found",
  })
})
// ------------------ SERVER ------------------ //
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
