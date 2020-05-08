const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      trim: true,
    },

    salt: String,

    role: {
      type: Number,
      default: 0,
    },

    history: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);



//hash password
userSchema.pre('save', async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  if (this.isModified('password')) {
    this.password = hashedPassword;
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;