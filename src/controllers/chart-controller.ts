import ChartModel from "../models/chart-model"
import { Request, Response } from "express"
abstract class ChartController {
  static getAll = async (req: Request, res: Response) => {
    const charts = await ChartModel.getAll()
    res.json(charts)
  }
}

export default ChartController
