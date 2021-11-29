import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
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
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      background-color: #f5f5f5;
      color: #dadada;
      cursor: default;
    `};
`;

const MainPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [disableButton, setDisableButton] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [yearsBetweenDates, setYearsBetweenDates] = useState(0);

  const Portfolio = {
    stocks: [
      { name: "TSLA", qty: 12 },
      { name: "GOOG", qty: 24 },
      { name: "AAPL", qty: 16 },
      { name: "NVDA", qty: 13.2 },
    ],
  };
  const handleOnClick = () => {
    setShowResult(true);
  };

  const checkForFields = () => {
    const datesSelected = startDate.trim().length && endDate.trim().length;
    if (datesSelected) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  useEffect(() => checkForFields());

  return (
    <MainContainer>
      <PortfolioComponent stocks={Portfolio.stocks} />
      <DayPickers
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setYearsBetweenDates={setYearsBetweenDates}
      />
      <MainButton onClick={handleOnClick} disabled={disableButton}>
        show me the moneyyy
      </MainButton>
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
