import express, { json } from "express"
import userRouter from "./routes/user-router"
import chartRouter from "./routes/chart-router"

const PORT = 43000
const app = express()

app.use(json())

app.get("/api/charts", chartRouter)
app.get("/api/users", userRouter)
app.use("/api", (req, res) => {
  res.json({
    name: "API REST - ASTRO DB",
    version: "1.0.0",
    server: "running",
  })
})
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
