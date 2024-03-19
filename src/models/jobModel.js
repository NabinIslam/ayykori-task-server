const { Schema, model } = require('mongoose');

const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = model('Job', jobSchema);

module.exports = Job;
