import { Router } from "express"
import UserController from "../controllers/user-controller"

const userRouter = Router()
userRouter.get("/", UserController.getAll)

export default userRouter
