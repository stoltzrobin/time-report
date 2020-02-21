import React, { useState, useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import { TimePicker } from "antd";

import { useMonthContext } from "../context/monthContext";

import {
  ADD_TIME,
  ADD_START_TIME,
  ADD_LUNCH_TIME,
  ADD_END_TIME
} from "../reducers/monthReducers";
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

  useEffect(
    () => {
      // Map start times, lunch times and end times to date object
      const tempMonth =
        month.length > 0 &&
        month.map(day => {
          const startTime = state.startTimes.find(x =>
            x.date.isSame(day.currentDate)
          );
          const lunchTime = state.lunchTimes.find(x =>
            x.date.isSame(day.currentDate)
          );
          const endTime = state.endTimes.find(x =>
            x.date.isSame(day.currentDate)
          );
          if (lunchTime) {
            console.log(moment.duration(endTime.time.diff(startTime.time)));
            console.log("Lunch: ", lunchTime);
          }
          return {
            ...day,
            startTime: startTime && startTime.time,
            lunchTime: lunchTime && lunchTime.time,
            endTime: endTime && endTime.time,
            totalWorkingTime:
              startTime &&
              endTime &&
              moment
                .duration(endTime.time.diff(startTime.time))
                .subtract(lunchTime && lunchTime.time)
          };
        });
      setMonth(tempMonth);
    },
    [state.startTimes, state.lunchTimes, state.endTimes]
  );

  // console.log("STATE", state);

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
                  type: ADD_START_TIME,
                  payload: { date: item.currentDate, time }
                })
              }
              format="HH:mm"
              minuteStep={15}
            />
            <TimePickerWrapper
              value={item.lunchTime}
              onChange={time =>
                dispatch({
                  type: ADD_LUNCH_TIME,
                  payload: { date: item.currentDate, time }
                })
              }
              format="HH:mm"
              minuteStep={15}
            />
            <TimePickerWrapper
              value={item.endTime}
              onChange={time => {
                console.log("CHANGE TIME");
                dispatch({
                  type: ADD_END_TIME,
                  payload: { date: item.currentDate, time }
                });
              }}
              format="HH:mm"
              minuteStep={15}
            />
            {item.totalWorkingTime && item.totalWorkingTime.asHours()}
          </Row>
        ))}
      </div>
    </div>
  );
};
