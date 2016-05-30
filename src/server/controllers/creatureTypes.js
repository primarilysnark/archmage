/* eslint array-callback-return: 0 */
import { CreatureSubType, CreatureType } from '../models';
import { creatureType as creatureTypeStrings } from '../../../localization/server.json';

export function createCreatureSubType(req, res) {
  const creatureSubType = new CreatureSubType({
    description: req.body.description,
    name: req.body.name,
    parentType: req.params.creatureId,
  });

  creatureSubType.save(err => {
    if (err != null) {
      res.send(err);
    } else {
      res.json({
        message: creatureTypeStrings.create,
        data: creatureSubType,
      });
    }
  });
}

export function createCreatureType(req, res) {
  const creatureType = new CreatureType({
    description: req.body.description,
    name: req.body.name,
    hitDie: req.body.hitDie,
  });

  creatureType.save(err => {
    if (err != null) {
      return res.send(err);
    }

    return res.json({
      message: creatureTypeStrings.create,
      data: creatureType,
    });
  });
}

export function getCreatureSubTypes(req, res) {
  CreatureSubType.find((err, creatureSubTypes) => {
    if (err != null) {
      res.send(err);
    } else {
      res.json({
        data: creatureSubTypes,
      });
    }
  });
}

export function getCreatureTypes(req, res) {
  CreatureType.find((err, creatureTypes) => {
    if (err != null) {
      res.send(err);
    } else {
      res.json({
        data: creatureTypes,
      });
    }
  });
}
