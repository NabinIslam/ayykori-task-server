const express = require('express');
const {
  handleApplyJob,
  handleGetAllCandidates,
  handleUpdateCandidate,
} = require('../controllers/candidateController');

const candidateRouter = express.Router();

candidateRouter.post('/', handleApplyJob);
candidateRouter.get('/', handleGetAllCandidates);
candidateRouter.put('/:id', handleUpdateCandidate);

module.exports = candidateRouter;
