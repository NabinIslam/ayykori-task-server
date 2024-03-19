const express = require('express');
const {
  handlePostAJob,
  handleGetAllJobs,
  handleGetAJobById,
  handleDeleteJobById,
} = require('../controllers/jobController');

const jobRouter = express.Router();

jobRouter.post('/', handlePostAJob);
jobRouter.get('/', handleGetAllJobs);
jobRouter.get('/id/:id', handleGetAJobById);
jobRouter.delete('/delete/:id', handleDeleteJobById);

module.exports = jobRouter;
