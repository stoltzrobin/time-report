import React from "react";
import styled from "styled-components";
import moment from "moment";
import { TimePicker } from "antd";

const Wrapper = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TotalTime = styled.div``;

export class AddTime extends React.Component {
  state = {
    startTime: null,
    endTime: null,
    lunchTime: 0
  };

  startTimeChanged = time => {
    this.setState({
      startTime: time
    });
  };

  lunchTimeChanged = time => {
    this.setState({
      lunchTime: time
    });
  };

  endTimeChanged = time => {
    this.setState({
      endTime: time
    });
  };

  render() {
    console.log("State: ", this.state);
    const timeDiff =
      this.state.startTime &&
      this.state.endTime &&
      this.state.endTime.diff(this.state.startTime, "seconds");
    const workTime = moment.duration(timeDiff, "seconds");
    console.log({ timeDiff, hours: workTime.hours(), min: workTime.minutes() });
    return (
      <Wrapper>
        <TimePicker
          onChange={this.startTimeChanged}
          format="HH:mm"
          minuteStep={15}
        />
        <TimePicker
          onChange={this.lunchTimeChanged}
          format="HH:mm"
          minuteStep={15}
        />
        <TimePicker
          onChange={this.endTimeChanged}
          format="HH:mm"
          minuteStep={15}
        />
        <TotalTime>{`${workTime.hours()}:${workTime.minutes()}`}</TotalTime>
      </Wrapper>
    );
  }
}
