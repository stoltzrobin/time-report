import React from "react";
import { DatePicker } from "antd";

export const SelectDate = props => {
  return (
    <div>
      <DatePicker defaultValue={props.defaultValue} onChange={props.onChange} />
    </div>
  );
};
