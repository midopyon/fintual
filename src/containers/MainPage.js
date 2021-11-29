import React, { useState } from "react";
import styled from "styled-components";
import PortfolioComponent from "../components/Portfolio";
import DayPickers from "../components/DayPickers";
import ProfitResults from "../components/ProfitResults";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainButton = styled.button`
  border-radius: 2000px;
  padding: 0 24px;
  margin: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #e1e1e1;
  height: 40px;
  background-color: #fff;
  color: #005ad6;
  font-family: "Poppins";
  font-weight: 500;
`;

const MainPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [yearsBetweenDates, setYearsBetweenDates] = useState(0);

  // Let's asume we have a Portfolio, containing objects of type Stock
  const Portfolio = {
    stocks: [
      { name: "TSLA", qty: 12 },
      { name: "GOOG", qty: 24 },
    ],
  };

  // Each of this stocks has a Price method, we use it to get the price of that stock in a given date
  // Since we haven't yet defined a stock object, lets first assume we can get it from a global function
  const handleOnClick = () => {
    setShowResult(true);
  };
  // So now, if we want to receive the portfolio profit, first we define the function getProfit

  return (
    <MainContainer>
      <PortfolioComponent stocks={Portfolio.stocks} />
      <DayPickers
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setYearsBetweenDates={setYearsBetweenDates}
      />
      <MainButton onClick={handleOnClick}>show me the moneyyy</MainButton>
      {showResult && (
        <ProfitResults
          stocks={Portfolio.stocks}
          startDate={startDate}
          endDate={endDate}
          yearsBetweenDates={yearsBetweenDates}
        />
      )}
    </MainContainer>
  );
};

export default MainPage;
