import mongoose from 'mongoose';

const CreatureTypeSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hitDie: {
    type: Number,
    required: true,
  },
});

export const CreatureType = mongoose.model('CreatureType', CreatureTypeSchema);

const CreatureSubTypeSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parentType: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export const CreatureSubType = mongoose.model('CreatureSubType', CreatureSubTypeSchema);
