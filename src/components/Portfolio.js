import React from "react";
import styled from "styled-components";
import Stock from "./Stock";

const PortfolioContainer = styled.div`
  width: 50%;
  padding: 20px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  background-color: #005ad6;
`;

const PortfolioHeader = styled.div`
  margin-bottom: 10px;
  text-align: left;
  font-family: "Poppins";
  font-weight: 500;
  color: white;
`;

const StonksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PortfolioComponent = (props) => {
  const { stocks } = props;
  return (
    <PortfolioContainer>
      <PortfolioHeader>my investments</PortfolioHeader>
      <StonksContainer>
        {stocks.length > 0 ? (
          stocks.map((stock, index) => {
            return <Stock key={index} name={stock.name} qty={stock.qty} />;
          })
        ) : (
          <div>no stocks yet :c get investing with fintual!</div>
        )}
      </StonksContainer>
    </PortfolioContainer>
  );
};

export default PortfolioComponent;
