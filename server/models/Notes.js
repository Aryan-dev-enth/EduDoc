import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  content: {
    type: String,
    required: true,
    minlength: 10,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  verified: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: () => new Date(),
  },
  updated_at: {
    type: Date,
    default: () => new Date(),
  },
  tags: {
    type: [String],
    default: [],
  },
  attachments: {
    type: [{
      filename: String,
      url: {
        type: String,
        validate: {
          validator: (value) => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value),
          message: 'Invalid URL',
        },
      },
    }],
    default: [],
  },
});

const Notes = mongoose.model('Notes', noteSchema);

export default Notes;
