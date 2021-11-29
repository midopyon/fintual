import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { calculateProfit } from "../utils/calculateProfit";
import { calculateAnnualizedReturn } from "../utils/calculateAnnualizedReturn";
import { getStockPricePerName } from "../services/getStockPrice";

const ProfitContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 24px;
  background-color: #f3f6fa;
  border-radius: 12px;
  font-family: "Poppins";
`;

const ProfitResults = (props) => {
  const { stocks, startDate, endDate, yearsBetweenDates } = props;
  const [profit, setProfit] = useState(0);
  const [annReturn, setAnnReturn] = useState(0);

  const getProfit = () => {
    var startValue = 0;
    var endValue = 0;
    stocks.forEach((stock) => {
      startValue =
        startValue + getStockPricePerName(stock.name, startDate) * stock.qty;
      endValue =
        endValue + getStockPricePerName(stock.name, endDate) * stock.qty;
    });

    setAnnReturn(
      calculateAnnualizedReturn(
        startValue,
        endValue,
        yearsBetweenDates
      ).toFixed(2)
    );
    // With the value of our portfolio in both dates, we call the helper function to calculate the profit:
    return calculateProfit(startValue, endValue).toFixed(2);
  };

  useEffect(() => {
    setProfit(getProfit());
  }, []);

  return (
    <ProfitContainer>
      <ResultContainer>simple: {profit}%</ResultContainer>
      <ResultContainer>annualized: {annReturn}%</ResultContainer>
    </ProfitContainer>
  );
};

export default ProfitResults;
