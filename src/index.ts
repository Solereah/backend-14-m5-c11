import express, { json } from "express"
import userRouter from "./routes/user-router"
import chartRouter from "./routes/chart-router"

const PORT = 43000
const app = express()

// ------------------ MIDDLEWARES ------------------ //
app.use(json())
// ------------------ ROUTERS ------------------ //
app.use("/api/charts", chartRouter)
app.use("/api/users", userRouter)

app.use("/api", (req, res) => {
  res.status(200).json({
    name: "API REST - ASTRO DB",
    version: "1.0.0",
    server: "running",
  })
}) // ------------------ SERVER ------------------ //
app.listen(PORT, () => {
  console.log("Server running on port", PORT)
})
