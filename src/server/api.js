import { upMessage } from '../../localization/server.json';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';

import {
  createAbilityScore,
  createCreatureSubType,
  createCreatureType,
  createRace,
  deleteRace,
  getAbilityScores,
  getCreatureSubTypes,
  getCreatureTypes,
  getRaces,
} from './controllers';

export const api = express();

// Connect to the adventurer MongoDB
mongoose.connect('mongodb://localhost:27017/archmage');

api.use(bodyParser.json());

api.get('/', (req, res) => {
  res.json({
    message: upMessage,
  });
});

api.route('/abilityScores')
  .get(getAbilityScores)
  .post(createAbilityScore);

api.route('/creatureTypes')
  .get(getCreatureTypes)
  .post(createCreatureType);

api.route('/creatureTypes/:creatureId/subTypes')
  .get(getCreatureSubTypes)
  .post(createCreatureSubType);

api.route('/races')
  .get(getRaces)
  .post(createRace);

api.route('/races/:raceId')
  .delete(deleteRace);
