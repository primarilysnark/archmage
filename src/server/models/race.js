import mongoose from 'mongoose';

const AbilityAdjustment = new mongoose.Schema({
  ability: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  adjustment: {
    type: Number,
    required: true,
  },
});

const RaceSchema = new mongoose.Schema({
  abilityAdjustment: {
    type: [AbilityAdjustment],
    required: true,
  },
  description: {
    type: [String],
  },
  name: {
    type: String,
    required: true,
    unqiue: true,
  },
});

export const Race = mongoose.model('Race', RaceSchema);
