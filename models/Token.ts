import mongoose, { Schema } from 'mongoose';

const TokenSchema = new Schema({
  id: { type: String, required: true, unique: true },
  refreshToken: { type: String, required: true },
});

export default mongoose.models.TokenSchema || mongoose.model('refreshToken', TokenSchema);
