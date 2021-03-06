'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Company Schema
 */
var CompanySchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Company name',
    trim: true
  },
  facility: {
    type: String,
    default: ''
  },
  profileImageURL: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: '',
  },
  weOffer: [{
    type: String,
  }],
  desiredProgramme: [{ type: String }],
  branch: [{ type: String }],
  whyStudentSession: {
    type: String,
    default: ''
  },
  didYouKnow: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  language: {
    type: String,
  },
  wednesday: {
    hasMeetings: Boolean,
    meetingLength: Number,
    starttime: String,
    endtime: String,
    lunchstart: String,
    lunchend: String
  },
  thursday: {
    hasMeetings: Boolean,
    meetingLength: Number,
    starttime: String,
    endtime: String,
    lunchstart: String,
    lunchend: String
  },
  meetings: [{
    student: {
      id: {
        type: Schema.ObjectId,
        ref: 'Application'
      },
      name: String
    },
    startTime: String,
    endTime: String,
    day: String,
    forced: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }],
  chosenStudents: [{
    type: Schema.ObjectId,
    ref: 'Application'
  }],
  active: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Company', CompanySchema);
