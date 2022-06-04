interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: process.env.EMAIL_SENDER || 'contato@gobarber.com.br',
      name: process.env.EMAIL_SENDER_NAME || 'Equipe GoBarber',
      replyTo: process.env.EMAIL_SENDER || 'contato@gobarber.com.br',
    },
  },
} as IMailConfig;
