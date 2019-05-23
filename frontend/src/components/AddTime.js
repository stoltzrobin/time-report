import React from "react";
import styled from "styled-components";
import moment from "moment";

import { TimePicker } from "antd";

const Wrapper = styled.div`
  width: 800px;
`;

const TimeWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const TimePickerWrapper = styled(TimePicker)`
  margin-right: 20px;
`;

const TotalTime = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`;

class AddTime extends React.Component {
  state = {
    startTime: null,
    endTime: null,
    lunchTime: 0
  };

  startTimeChanged = time => {
    this.props.onChange({ ...this.state, startTime: time });
    this.setState({
      startTime: time
    });
  };

  lunchTimeChanged = time => {
    this.props.onChange({ ...this.state, lunchTime: time });
    this.setState({
      lunchTime: time
    });
  };

  endTimeChanged = time => {
    this.props.onChange({ ...this.state, endTime: time });
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
    // console.log({ timeDiff, hours: workTime.hours(), min: workTime.minutes() });
    return (
      <Wrapper>
        <TimeWrapper>
          <TimePickerWrapper
            onChange={this.startTimeChanged}
            format="HH:mm"
            minuteStep={15}
          />
          <TimePickerWrapper
            onChange={this.lunchTimeChanged}
            format="HH:mm"
            minuteStep={15}
          />
          <TimePickerWrapper
            onChange={this.endTimeChanged}
            format="HH:mm"
            minuteStep={15}
          />
        </TimeWrapper>

        <TotalTime>{`${workTime.hours()}:${workTime.minutes()}`}</TotalTime>
      </Wrapper>
    );
  }
}

export default AddTime;
