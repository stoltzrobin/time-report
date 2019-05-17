const express = require("express");
const timeReportModel = require("../Models/timeReportModel");
const mongoose = require("mongoose");

let timeModel;

const getMonthReport = async (req, res) => {
  try {
    const yearExists = await timeReportModel.findOne({
      year: req.params.year
    });
    if (!yearExists) {
      res.status(404).json({ message: "Year does not exits" });
    } else {
      let monthExists;
      yearExists.workLog.forEach(elem => {
        if (elem.month === req.params.month) {
          console.log("MONTH FOUND");
          monthExists = elem;
        }
      });
      if (monthExists) {
        res.json(monthExists);
      } else {
        res.json({ msg: "Month can not be found" });
      }
    }
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      msg: error.response ? error.response.data.message : error.message
    });
  }
};

const updateMonthReport = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getMonthReport
};
