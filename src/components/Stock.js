import React from "react";
import styled from "styled-components";

const StockContainer = styled.div`
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 1px dashed #bdbdbd;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
`;

const StockName = styled.div`
  text-align: left;
  font-family: "Poppins";
  font-weight: 600;
  color: black;
`;

const QtyContainer = styled.div`
  text-align: left;
  font-family: "Poppins";
  font-weight: 400;
  color: black;
`;

const Stock = (props) => {
  const { name, qty } = props;
  return (
    <StockContainer>
      <StockName>{name}</StockName>
      <QtyContainer>shares: {qty}</QtyContainer>
    </StockContainer>
  );
};

export default Stock;
