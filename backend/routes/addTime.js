const express = require("express");
const mongoose = require("mongoose");

let timeModel;

const addTime = async (req, res) => {
  try {
    console.log("Req: ", req.body);
    res.json({ ...req.body });
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      msg: error.response ? error.response.data.message : error.message
    });
  }
};

module.exports = {
  addTime
};
