function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newGame({ min, max }) {
  return {
    target: randomInt(min, max),
    attempts: 0,
    history: [],
    won: false,
    lastMessage: null,
  };
}

function applyGuess(state, guess, range) {
  if (state.won) return state;

  if (!Number.isInteger(guess) || guess < range.min || guess > range.max) {
    return {
      ...state,
      lastMessage: {
        type: 'error',
        text: `Enter a whole number between ${range.min} and ${range.max}.`,
      },
    };
  }

  const attempts = state.attempts + 1;
  let hint;
  let won = false;

  if (guess < state.target) hint = 'higher';
  else if (guess > state.target) hint = 'lower';
  else { hint = 'correct'; won = true; }

  const lastMessage = won
    ? { type: 'success', text: `Got it in ${attempts} ${attempts === 1 ? 'try' : 'tries'}!` }
    : { type: 'hint', text: `Try ${hint}.` };

  return {
    ...state,
    attempts,
    won,
    history: [...state.history, { guess, hint }],
    lastMessage,
  };
}

module.exports = { newGame, applyGuess };
