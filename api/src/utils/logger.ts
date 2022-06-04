import pino from 'pino';

export default pino({
  enabled: !(process.env.LOG_DISABLED === 'true'),
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});
