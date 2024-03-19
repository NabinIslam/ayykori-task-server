const Candidate = require('../models/candidateModel');

const handleApplyJob = async (req, res, next) => {
  try {
    const newApplication = await Candidate.create(req.body);

    if (!newApplication)
      return res
        .status(404)
        .json({ success: false, message: `Could not apply to the job` });

    return res.status(200).json({
      success: true,
      message: `Application successful`,
      newApplication,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetAllCandidates = async (req, res, next) => {
  try {
    let sort = { createdAt: -1 };
    let filter = {};

    if (req.query.sort) {
      sort = req.query.sort;
    }

    const status = req.query.status;
    const gender = req.query.gender;

    if (status) {
      filter = { ...filter, status };
    }

    if (gender) {
      filter = { ...filter, gender };
    }

    const candidates = await Candidate.find(filter)
      .populate('appliedJob')
      .sort(sort);

    if (!candidates)
      return res
        .status(404)
        .json({ success: false, message: `Could not find the candidates` });

    return res.status(200).json({
      success: true,
      message: `Fetched all candidates successfully`,
      candidates,
    });
  } catch (error) {
    next(error);
  }
};

const handleUpdateCandidate = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedCandidate = await Candidate.findOneAndUpdate(
      { _id: id },
      {
        $set: req.body,
      },
      { new: true }
    ).populate('appliedJob');

    return res.status(200).json({
      success: true,
      message: 'Candidate has updated successfully',
      updatedCandidate,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleApplyJob,
  handleGetAllCandidates,
  handleUpdateCandidate,
};
