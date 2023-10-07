import charts from "../database/charts.json"
abstract class ChartModel {
  static getAll = async () => charts
}
export default ChartModel
