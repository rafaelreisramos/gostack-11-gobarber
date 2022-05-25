export default {
  jwt: {
    secret: process.env.APP_SECRET || 'app_secret',
    expiresIn: '1d',
  },
};
