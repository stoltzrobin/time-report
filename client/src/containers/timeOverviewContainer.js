import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWorkTimes } from '../actions';

class timeOverviewContainer extends Component {
  static propTypes = {
    workTimesState: PropTypes.shape({
      overtimeHours: PropTypes.number,
    }),
    fetchWorkTimes: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchWorkTimes();
  }

  render() {

    const { overtimeHours } = this.props.workTimesState;

    return (
      <div>
        <h1>Work time overview</h1>
        <h2>Overtime:
       { overtimeHours !== undefined ? overtimeHours : " loading"} </h2>
        
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
  return bindActionCreators({ fetchWorkTimes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(timeOverviewContainer);
