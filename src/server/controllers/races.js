import { Race } from '../models';
import { race as raceStrings } from '../../../localization/server.json';

export function createRace(req, res) {
  const race = new Race({
    abilityAdjustment: req.body.abilityAdjustment,
    description: req.body.description,
    name: req.body.name,
  });

  return race.save()
    .then(createdRace => res.json({
      message: raceStrings.create,
      data: createdRace,
    }))
    .catch(err => res.status(400).send(err));
}

export function deleteRace(req, res) {
  return Race.findById(req.params.raceId)
    .exec()
    .then(race => {
      if (race == null) {
        return res.status(404).send();
      }

      return Race.where({ _id: req.params.raceId }).remove();
    })
    .then(() => res.status(204).send())
    .catch(err => res.status(400).send(err));
}

export function getRaces(req, res) {
  return Race.find()
    .exec()
    .then(races => res.json({
      data: races,
    }))
    .catch(err => res.send(err));
}
