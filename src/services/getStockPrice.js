const pricesGoog = require("../constants/pricesGoog.json");
const pricesTsla = require("../constants/pricesTsla.json");
const pricesAapl = require("../constants/pricesAapl.json");
const pricesNvda = require("../constants/pricesNvda.json");

export function getStockPricePerName(name, date) {
  switch (name) {
    case "GOOG":
      return pricesGoog[date] ? pricesGoog[date] : 0;
    case "TSLA":
      return pricesTsla[date] ? pricesTsla[date] : 0;
    case "AAPL":
      return pricesAapl[date] ? pricesAapl[date] : 0;
    case "NVDA":
      return pricesNvda[date] ? pricesNvda[date] : 0;
    default:
      return 0;
  }
}
