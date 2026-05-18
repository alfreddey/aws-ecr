module.exports = {
  port: Number(process.env.PORT) || 3000,
  sessionSecret: process.env.SESSION_SECRET || 'dev-only-change-me',
  game: {
    min: 1,
    max: 100,
  },
};
