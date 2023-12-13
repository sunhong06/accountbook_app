import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  id: String,
  password: String,
  email: String,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
