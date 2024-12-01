import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { ADMIN_LOGIN, ADMIN_NAME, ADMIN_PASSWORD } from '../config/index.js';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      allowNull: false,
    },
    role: {
      type: String,
      allowNull: false,
    },
    email: {
      type: String,
      allowNull: false,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model('User', userSchema);
export const createAdmin = async () => {
  const checkExist = await User.findOne({ role: 'ADMIN' });
  if (!checkExist) {
    const hashed = await bcrypt.hash(ADMIN_PASSWORD, 15);
    const admin = new User({
      name: ADMIN_NAME,
      role: 'ADMIN',
      email: ADMIN_LOGIN,
      password: hashed,
    });
    admin.save();
    console.log('\x1b[31m$$-\x1bx', `Admin User is created successfully.`);
  } else {
    console.log('\x1b[31m$$-\x1bx', `Admin User is exist.`);
  }
};
