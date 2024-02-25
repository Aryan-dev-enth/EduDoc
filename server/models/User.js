import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Basic email validation
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  profile: {
    fullName: {
      type: String,
      minlength: 2,
      maxlength: 100,
    },
    avatarUrl: {
      type: String,
      validate: {
        validator: function (value) {
          return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
        },
        message: 'Invalid URL',
      },
    },
    bio: {
      type: String,
      maxlength: 500,
    },
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
