import mongoose from 'mongoose';

const AbilityScoreSchema = new mongoose.Schema({
  abbreviation: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const AbilityScore = mongoose.model('AbilityScore', AbilityScoreSchema);
