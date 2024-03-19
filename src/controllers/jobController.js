const Job = require('../models/jobModel');
const slugify = require('slugify');

const handlePostAJob = async (req, res, next) => {
  try {
    const { title, description, jobType } = req.body;

    const newJob = await Job.create({
      title,
      slug: slugify(title),
      description,
      jobType,
    });

    if (!newJob)
      return res
        .status(404)
        .json({ success: false, message: `Could not post the job` });

    return res.status(200).json({
      success: true,
      message: `Job posted successfully`,
      newJob,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetAllJobs = async (req, res, next) => {
  try {
    let sort = { createdAt: -1 };

    const allJobs = await Job.find({}).sort(sort);

    if (!allJobs)
      return res
        .status(404)
        .json({ success: false, message: `Could not find the jobs` });

    return res.status(200).json({
      success: true,
      message: `Fetched all jobs successfully`,
      allJobs,
    });
  } catch (error) {
    next(error);
  }
};

const handleGetAJobById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const job = await Job.findOne({ _id: id });

    if (!job)
      return res
        .status(404)
        .json({ success: false, message: `Could not find the job` });

    return res.status(200).json({
      success: true,
      message: `Fetched the job successfully`,
      job,
    });
  } catch (error) {
    next(error);
  }
};

const handleDeleteJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await Job.findOneAndDelete({ _id: id });

    if (!job)
      return res
        .status(404)
        .json({ success: false, message: `Could not delete the job` });

    return res.status(200).json({
      success: true,
      message: `Deleted the job successfully`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { handlePostAJob, handleGetAllJobs, handleGetAJobById,handleDeleteJobById };
