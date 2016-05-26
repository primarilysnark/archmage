/* eslint array-callback-return: 0 */
import { AbilityScore } from '../models';

export function createAbilityScore(req, res) {
  const abilityScore = new AbilityScore({
    abbreviation: req.body.abbreviation,
    name: req.body.name,
  });

  abilityScore.save(err => {
    if (err != null) {
      res.send(err);
    }

    res.json({
      message: 'Ability score added to the vault.',
      data: abilityScore,
    });
  });
}

export function getAbilityScores(req, res) {
  AbilityScore.find((err, abilityScores) => {
    if (err != null) {
      res.send(err);
    }

    res.json({
      data: abilityScores,
    });
  });
}
