import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { calculateProfit } from "../utils/calculateProfit";
import { getStockPricePerName } from "../services/getStockPrice";

const ProfitContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: greenyellow;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
`;

const ProfitResults = (props) => {
  const { stocks, startDate, endDate } = props;
  const [profit, setProfit] = useState(0);

  const getProfit = () => {
    var startValue = 0;
    var endValue = 0;
    stocks.forEach((stock) => {
      console.log(stock, getStockPricePerName(stock.name, startDate));
      console.log("start", startDate);
      startValue =
        startValue + getStockPricePerName(stock.name, startDate) * stock.qty;
      endValue =
        endValue + getStockPricePerName(stock.name, endDate) * stock.qty;
    });
    // With the value of our portfolio in both dates, we call the helper function to calculate the profit:
    return calculateProfit(startValue, endValue);
  };

  useEffect(() => {
    setProfit(getProfit());
  }, []);

  return <ProfitContainer>{profit}</ProfitContainer>;
};

export default ProfitResults;
