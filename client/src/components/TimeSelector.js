import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Table, TimePicker} from 'antd';

const format = 'HH:mm';

export class TimeSelector extends Component {

  render() {
    const columns = [{
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Start',
      dataIndex: 'start',
      key: 'start',
      render: (start, obj) => <TimePicker
        onChange={(time, timeString) => this.props.onChange(time, timeString, obj, { start: true })}
        defaultValue={moment(start, format)} format={format} 
        minuteStep={15}/>,
    }, {
      title: 'Lunch',
      dataIndex: 'lunch',
      key: 'lunch',
      render: (lunch, obj) => <TimePicker
        onChange={(time, timeString) => this.props.onChange(time, timeString, obj, { lunch: true })}
        defaultValue={moment(lunch, format)} format={format} 
        minuteStep={15}/>,
    }, {
      title: 'End',
      dataIndex: 'end',
      key: 'end',
      render: (end, obj) => <TimePicker
        onChange={(time, timeString) => this.props.onChange(time, timeString, obj, { end: true })}
        defaultValue={moment(end, format)} format={format} 
        minuteStep={15}/>,
    }, {
      title: 'Flex',
      dataIndex: 'flex',
      key: 'flex',
    }];

    let workTimes = this.props.collection.workTimes;
    workTimes.map(day => {
      const start = moment(day.start, format);
      const end = moment(day.end, format);
      const durationDiff = moment.duration(end.diff(start));
      let flexTime = durationDiff.asHours() - 8 - moment.duration(day.lunch).asHours();
      flexTime = moment.duration(flexTime, 'hours');
      return day.flex = flexTime.asHours().toFixed(2) ;
    })

    return (
      <div>
        {
          this.props.collection !== undefined ?
            < Table columns={columns} dataSource={this.props.collection.workTimes} /> :
            "Loading"
        }
      </div>
    )
  }
}

TimeSelector.propTypes = {
  collection: PropTypes.shape({
    workTimes: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      start: PropTypes.string,
      lunch: PropTypes.string,
      end: PropTypes.string,
    }))
  }),
  onChange: PropTypes.func,
}