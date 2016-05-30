import { CreatureSubType, CreatureType } from '../models';
import { creatureType as creatureTypeStrings } from '../../../localization/server.json';

export function createCreatureSubType(req, res) {
  const creatureSubType = new CreatureSubType({
    description: req.body.description,
    name: req.body.name,
    parentType: req.params.creatureId,
  });

  return creatureSubType.save()
    .then(savedCreatureSubType => res.json({
      message: creatureTypeStrings.create,
      data: savedCreatureSubType,
    }))
    .catch(err => res.status(400).send(err));
}

export function createCreatureType(req, res) {
  const creatureType = new CreatureType({
    description: req.body.description,
    name: req.body.name,
    hitDie: req.body.hitDie,
  });

  return creatureType.save()
    .then(savedCreatureType => res.json({
      message: creatureTypeStrings.create,
      data: savedCreatureType,
    }))
    .catch(err => res.status(400).send(err));
}

export function getCreatureSubTypes(req, res) {
  return CreatureSubType.find()
    .then(creatureSubTypes => res.json({
      data: creatureSubTypes,
    }))
    .catch(err => res.send(err));
}

export function getCreatureTypes(req, res) {
  return CreatureType.find()
    .then(creatureTypes => res.json({
      data: creatureTypes,
    }))
    .catch(err => res.send(err));
}
