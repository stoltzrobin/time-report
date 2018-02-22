import axios from 'axios';

const API_URL = "localhost:4000";

export const fetchMonthReport = (month) => {
  axios.get( `${API_URL}/getMonthReport/${month}`).then( (reponse) => 
    reponse.data.map()
);
}