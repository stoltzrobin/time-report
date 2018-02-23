import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Button, DatePicker } from 'antd';

import { fetchWorkTimes, changeWorkTime } from '../actions';
import { TimeSelector } from '../components';


class timeOverviewContainer extends Component {
  constructor(props) {
    super(props);
    this.onTimeChanged = this.onTimeChanged.bind(this);
  }

  componentDidMount() {
    this.props.fetchWorkTimes();
  }

  onTimeChanged(time, timeString, obj, timeChanged) {
    console.log("timer: ", timeChanged);
    this.props.changeWorkTime(obj, timeString, timeChanged);
  }

  render() {

    const { overtimeHours } = this.props.workTimesState;

    return (
      <div>
        <h1>Work time overview</h1>
        <h2>Overtime:
       {overtimeHours !== undefined ? overtimeHours : " loading"} </h2>

        <Button type="danger">tests</Button>
        <DatePicker></DatePicker>

        <TimeSelector collection={this.props.workTimesState} onChange={this.onTimeChanged} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    workTimesState: state.workTimesState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWorkTimes, changeWorkTime }, dispatch);
}

timeOverviewContainer.propTypes = {
  workTimesState: PropTypes.shape({
    overtimeHours: PropTypes.number,
  }),
  fetchWorkTimes: PropTypes.func,
  changeWorkTime: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(timeOverviewContainer);
