import axios from 'axios';

const API_URL = "http://localhost:4000";

export const fetchMonthReport = (year, month) =>
  axios.get(`${API_URL}/monthReport/${year}/${month}`).then((response) =>
    response.data
  );