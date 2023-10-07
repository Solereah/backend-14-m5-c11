import UserModel from "../models/user-model"
import { Response, Request } from "express"
abstract class UserController {
  static getAll = async (req: Request, res: Response) => {
    const users = await UserModel.getAll()
    res.json(users)
  }
}

export default UserController
