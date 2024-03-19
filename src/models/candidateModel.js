const { Schema, model } = require('mongoose');

const candidateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    expectedSalary: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
    },
    appliedJob: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
  },
  { timestamps: true }
);

const Candidate = model('Candidate', candidateSchema);

module.exports = Candidate;
