const express = require('express');
const cors = require('cors');

//router imports
const candidateRouter = require('./routers/candidateRouter');
const jobRouter = require('./routers/jobRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/candidates', candidateRouter);
app.use('/api/jobs', jobRouter);

app.get('/', (req, res) => res.send(`AyyKori server is running fine!`));

module.exports = app;
