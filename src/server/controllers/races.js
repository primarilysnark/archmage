/* eslint array-callback-return: 0 */
import { Race } from '../models';
import { race as raceStrings } from '../../../localization/server.json';

export function createRace(req, res) {
  const race = new Race({
    abilityAdjustment: req.body.abilityAdjustment,
    description: req.body.description,
    name: req.body.name,
  });

  race.save(err => {
    if (err != null) {
      res.send(err);
    } else {
      res.json({
        message: raceStrings.create,
        data: race,
      });
    }
  });
}

export function deleteRace(req, res) {
  Race.findById(req.params.raceId, (err, race) => {
    if (err != null) {
      return res.status(400).send(err);
    }

    if (race == null) {
      return res.status(404).send();
    }

    return Race.where({ _id: req.params.raceId }).remove(removeErr => {
      if (removeErr) {
        return res.send(removeErr);
      }

      return res.status(204).send();
    });
  });
}

export function getRaces(req, res) {
  Race.find((err, races) => {
    if (err != null) {
      return res.send(err);
    }

    return res.json({
      data: races,
    });
  });
}
