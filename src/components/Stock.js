import React from "react";
import styled from "styled-components";

const StockContainer = styled.div`
  width: 201px;
  height: 220px;
  padding: 20px;
  border: 1px dashed #bdbdbd;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
`;

const Stock = (props) => {
  const { name, qty } = props;
  return (
    <StockContainer>
      Hey im {name}
      Quantity: {qty}
    </StockContainer>
  );
};

export default Stock;
