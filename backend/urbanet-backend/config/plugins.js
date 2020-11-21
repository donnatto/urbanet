module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: 'SG.O9CVL__xRW6QJ_r_EA1rNg.e8pWM0bEpAM0kWeG-j-pXPPVEMQEuDpkX7MfGoO_ogE', // Ingresar API KEY
    },
    settings: {
      defaultFrom: 'franco.salcedo.i3@gmail.com',
      defaultReplyTo: 'franco.salcedo.i3@gmail.com',
    },
  },
});
