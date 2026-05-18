const gameService = require('../services/gameService');
const gameStore = require('../store/gameStore');
const config = require('../config');

exports.show = (req, res) => {
  const state = gameStore.getOrInit(req.session);
  res.render('index', { state, range: config.game });
};

exports.guess = (req, res) => {
  const state = gameStore.getOrInit(req.session);
  const parsed = Number.parseInt(req.body.guess, 10);
  const next = gameService.applyGuess(state, parsed, config.game);
  gameStore.set(req.session, next);
  res.redirect('/');
};

exports.reset = (req, res) => {
  gameStore.reset(req.session);
  res.redirect('/');
};
