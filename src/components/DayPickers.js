import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYearsBetweenDates } from "../utils/getYearsBetweenDates";

const DayPickerContainer = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const DayPickers = (props) => {
  const { setStartDate, setEndDate, setYearsBetweenDates } = props;
  const [fullStartDate, setFullStartDate] = useState(null);
  const [fullEndDate, setFullEndDate] = useState(null);

  const handleStartDatePick = (day) => {
    setFullStartDate(day);
    const startDateString = day.toISOString().split("T")[0];
    setStartDate(startDateString);
  };

  const handleEndDatePick = (day) => {
    setFullEndDate(day);
    const endDateString = day.toISOString().split("T")[0];
    setEndDate(endDateString);
    setYearsBetweenDates(getYearsBetweenDates(fullStartDate, day));
  };

  return (
    <DayPickerContainer>
      from:
      <div>
        <DatePicker
          placeholderText="pick a start date :3"
          selected={fullStartDate}
          onChange={(date) => handleStartDatePick(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date("01-01-2020")}
          maxDate={new Date("11-28-2021")}
        />
      </div>
      to:
      <div>
        <DatePicker
          placeholderText="pick an end date :3"
          selected={fullEndDate}
          onChange={(date) => handleEndDatePick(date)}
          dateFormat="dd/MM/yyyy"
          minDate={fullStartDate}
          maxDate={new Date("11-28-2021")}
        />
      </div>
    </DayPickerContainer>
  );
};

export default DayPickers;
