import React from "react";
import styled from "styled-components";
import Stock from "./Stock";

const PortfolioContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
`;

const PortfolioComponent = (props) => {
  const { stocks } = props;
  return (
    <PortfolioContainer>
      {stocks.length > 0 ? (
        stocks.map((stock, index) => {
          return <Stock key={index} name={stock.name} qty={stock.qty} />;
        })
      ) : (
        <div>no stocks yet :c get investing with fintual!</div>
      )}
    </PortfolioContainer>
  );
};

export default PortfolioComponent;
