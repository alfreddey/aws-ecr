const gameService = require('../services/gameService');
const config = require('../config');

function getOrInit(session) {
  if (!session.game) {
    session.game = gameService.newGame(config.game);
  }
  return session.game;
}

function set(session, state) {
  session.game = state;
}

function reset(session) {
  session.game = gameService.newGame(config.game);
}

module.exports = { getOrInit, set, reset };
