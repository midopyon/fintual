import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DayPickerContainer = styled.div`
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

const DayPickers = (props) => {
  const { setStartDate, setEndDate } = props;
  const [fullStartDate, setFullStartDate] = useState(new Date());
  const [fullEndDate, setFullEndDate] = useState(new Date());

  const handleStartDatePick = (day) => {
    setFullStartDate(day);
    const startDateString = day.toISOString().split("T")[0];
    setStartDate(startDateString);
  };

  const handleEndDatePick = (day) => {
    setFullEndDate(day);
    const endDateString = day.toISOString().split("T")[0];
    setEndDate(endDateString);
  };

  return (
    <DayPickerContainer>
      from:
      <div>
        <DatePicker
          selected={fullStartDate}
          onChange={(date) => handleStartDatePick(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      to:
      <div>
        <DatePicker
          selected={fullEndDate}
          onChange={(date) => handleEndDatePick(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </DayPickerContainer>
  );
};

export default DayPickers;
