import users from "../database/users.json"
abstract class UserModel {
  static getAll = async () => users
}
export default UserModel
