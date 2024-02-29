import mongoose, { Schema } from 'mongoose';

const TokenSchema = new Schema({
  id: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true, unique: true },
});

export default mongoose.models.Token || mongoose.model('Token', TokenSchema);
