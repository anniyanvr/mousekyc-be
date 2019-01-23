const config = {
  port: 3000,

  // db: 'mongodb://localhost:27017/kyc-db', // this is for local db
  db: 'mongodb://mongo:27017/kyc-db', // this is for docker db

  email: {
    domain: 'mail.norestlabs.com',
    mailgun: {
      public: 'insert you public key here',
      private: 'insert your private key here'
    },
    masterEmail: 'galen@norestlabs.com',
    from: {
      general: 'hello@norestlabs.com',
    },
    template: {
      folder: 'default',
    }
  },
  project: 'NRL-KYC',

  API_KEY: 'apikey-1234567890',
  frontendBaseUrl: 'https://mousekyc.mousebelt.com', // kyc-frontend url
  baseUrl: 'https://mousekyc-server.mousebelt.com', // kyc-backend url

  demoMode: false,
};

module.exports = config;
