const config = require('../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB_URL);
const timeReportModel = mongoose.model('timeReport', new mongoose.Schema({
  overtime: {
    type: Number,
    required: false,
  },
  year: {
    type: Number,
    required: true,
    trim: true,
  },
  workLog: [{
    month: {
      type: String,
      required: true,
    },
    workTimes: [{
      date: {
        type: String,
        required: true,
      },
      start: {
        type: String,
        required: false,
      },
      lunch: {
        type: String,
        required: false,
      },
      end: {
        type: String,
        required: false,
      },
      flex: {
        type: String,
        required: false,
      }
    }]
  }]
}));

module.exports = timeReportModel;