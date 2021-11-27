import React from "react";
const pricesGoog = { "01/02/2000": 23, "03/02/2000": 24, "04/02/2000": 25 };
const pricesTsla = {
  "01/02/2000": 45,
  "03/02/2000": 40,
  "04/02/2000": 47,
};

const MainPage = () => {
  // Let's asume we have a Portfolio, containing objects of type Stock

  const Portfolio = {
    stocks: [
      { name: "TSLA", qty: 12 },
      { name: "GOOG", qty: 24 },
    ],
  };

  // Each of this stocks has a Price method, we use it to get the price of that stock in a given date
  // Since we haven't yet defined a stock object, lets first assume we can get it from a global function

  const getStockPricePerName = (stockName, date) => {
    switch (stockName) {
      case "GOOG":
        return pricesGoog[date] ? pricesGoog[date] : 0;
      case "TSLA":
        return pricesTsla[date] ? pricesTsla[date] : 0;
      default:
        return 100;
    }
  };

  const calculateProfit = (startValue, endValue) => {
    console.log(startValue, endValue);
    // math formula to get profit
    return ((endValue - startValue) / startValue) * 100;
  };

  // So now, if we want to receive the portfolio profit, first we define the function
  const getProfit = (startDate, endDate) => {
    var startValue = 0;
    var endValue = 0;
    Portfolio.stocks.forEach((stock) => {
      startValue =
        startValue + getStockPricePerName(stock.name, startDate) * stock.qty;
      endValue =
        endValue + getStockPricePerName(stock.name, endDate) * stock.qty;
    });
    // With the value of our portfolio in both dates, we call the helper function to calculate the profit:
    return calculateProfit(startValue, endValue);
  };

  return (
    <div>
      helloooo from main page
      <div>
        {Portfolio.stocks[0].name} - {Portfolio.stocks[1].name}
      </div>
      <div>And the profit is!!: </div>
      {getProfit("01/02/2000", "04/02/2000")}
    </div>
  );
};

export default MainPage;
