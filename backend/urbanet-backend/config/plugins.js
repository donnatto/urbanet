module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: '', // Ingresar API KEY
    },
    settings: {
      defaultFrom: 'franco.salcedo.i3@gmail.com',
      defaultReplyTo: 'franco.salcedo.i3@gmail.com',
    },
  },
});