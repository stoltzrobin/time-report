import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import moment from "moment";

import AddTime from "../components/AddTime";
import { SelectDate } from "../components/SelectDate";

const dateFormat = "YYYY/MM/DD";

const ComponentWrapper = styled.div`
  margin: 10px;
  margin-top: 20px;
`;

class AddTimeContainer extends React.Component {
  state = {
    time: null,
    date: moment(new Date(), dateFormat)
  };

  setTime = time => {
    this.setState({ time });
  };

  setDate = date => {
    this.setState({ date });
  };
  render() {
    return (
      <div>
        <ComponentWrapper>
          <SelectDate defaultValue={this.state.date} onChange={this.setDate} />
        </ComponentWrapper>
        <ComponentWrapper>
          <AddTime onChange={this.setTime} />
        </ComponentWrapper>
        <ComponentWrapper>
          <Button onClick={() => this.props.addTime(this.state)}>
            Save Time
          </Button>
        </ComponentWrapper>
      </div>
    );
  }
}

export default AddTimeContainer;