const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { getMonthReport } = require('./routes/monthReports');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.get('/monthReport/:year/:month', getMonthReport);

app.get('/', (req, res) => res.send('Hello World!'))

app.use((req, res) => {
  res.status(404).json({ msg: 'route not found!' });
});

app.listen(4000, () => console.log('Backend started on port 4000'));