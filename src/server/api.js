import { createAbilityScore, getAbilityScores } from './controllers';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

export const api = express();

// Connect to the adventurer MongoDB
mongoose.connect('mongodb://localhost:27017/archmage');

api.use(bodyParser.json());

api.get('/', (req, res) => {
  res.json({
    message: 'It is pitch black. You are likely to be eaten by a grue.',
  });
});

api.route('/abilityScores')
  .get(getAbilityScores)
  .post(createAbilityScore);
