module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: process.env.SENGDRID_API_KEY, // Ingresar API KEY
    },
    settings: {
      defaultFrom: 'franco.salcedo.i3@gmail.com',
      defaultReplyTo: 'franco.salcedo.i3@gmail.com',
    },
  },
});