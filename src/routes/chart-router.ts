import { Router } from "express"
import ChartController from "../controllers/chart-controller"

const chartRouter = Router()
chartRouter.get("/", ChartController.getAll)

export default chartRouter
