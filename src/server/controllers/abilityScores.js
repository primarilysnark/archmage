import { AbilityScore } from '../models';
import { abilityScore as abilityScoreStrings } from '../../../localization/server.json';

export function createAbilityScore(req, res) {
  const abilityScore = new AbilityScore({
    abbreviation: req.body.abbreviation,
    name: req.body.name,
  });

  return abilityScore.save()
    .then(savedAbilityScore => res.json({
      message: abilityScoreStrings.create,
      data: savedAbilityScore,
    }))
    .catch(err => res.status(400).send(err));
}

export function getAbilityScores(req, res) {
  return AbilityScore.find()
    .then(abilityScores => res.json({
      data: abilityScores,
    }))
    .catch(err => res.send(err));
}
