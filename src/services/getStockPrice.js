const pricesGoog = require("../constants/pricesGoog.json");
const pricesTsla = require("../constants/pricesTsla.json");

export function getStockPricePerName(name, date) {
  switch (name) {
    case "GOOG":
      return pricesGoog[date] ? pricesGoog[date] : 0;
    case "TSLA":
      return pricesTsla[date] ? pricesTsla[date] : 0;
    default:
      return 100;
  }
}
