import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { TimePicker } from "antd";

import { useMonthContext } from "../context/monthContext";

import { ADD_TIME } from "../reducers/monthReducers";
import { CHANGE_TIME } from "../reducers/monthReducers";

import { getMonth } from "../utils/calendarUtils";

const TimePickerWrapper = styled(TimePicker)`
  margin-right: 20px;
`;

const Row = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
`;

const DateWrapper = styled.div`
  width: 20%;
`;

export const ReportTable = () => {
  const [month, setMonth] = useState(getMonth());
  const [state, dispatch] = useMonthContext();
  // console.log("Context", state);

  // const month = getMonth();
  useEffect(
    () => {
      if (state.addTime && state.addTime.length > 0) {
        const tempMonth =
          month.length > 0 &&
          month.map(day => {
            const dateObject = state.addTime.find(x =>
              x.date.isSame(day.currentDate)
            );
            return {
              ...day,
              startTime: dateObject && dateObject.startTime,
              lunchTime: dateObject && dateObject.lunchTime,
              endTime: dateObject && dateObject.endTime
            };
          });
        setMonth(tempMonth);
      }
    },
    [state.addTime]
  );

  console.log("state: ", state);
  // console.log("Month: ", month);
  console.log("Month: ", month);

  return (
    <div>
      Report Table
      <button
        onClick={() =>
          dispatch({ type: ADD_TIME, payload: { addTime: "Added time" } })
        }
      >
        Add time
      </button>
      <button
        onClick={() =>
          dispatch({ type: CHANGE_TIME, editTime: "Changed Time" })
        }
      >
        Change Time
      </button>
      <button onClick={() => getMonth(1)}>Get month</button>
      <div>
        {month.map(item => (
          <Row key={item.currentDate.date()}>
            <DateWrapper>
              {item.currentDate.format("MMMM - DD ddd")}
            </DateWrapper>
            <TimePickerWrapper
              value={item.startTime}
              onChange={time =>
                dispatch({
                  type: ADD_TIME,
                  payload: { date: item.currentDate, startTime: time }
                })
              }
              format="HH:mm"
              minuteStep={15}
            />
            <TimePickerWrapper
              value={item.lunchTime}
              onChange={time =>
                dispatch({
                  type: ADD_TIME,
                  payload: { date: item.currentDate, lunchTime: time }
                })
              }
              format="HH:mm"
              minuteStep={15}
            />
            <TimePickerWrapper
              value={item.endTime}
              onChange={time =>
                dispatch({
                  type: ADD_TIME,
                  payload: { date: item.currentDate, endTime: time }
                })
              }
              format="HH:mm"
              minuteStep={15}
            />
          </Row>
        ))}
      </div>
    </div>
  );
};
