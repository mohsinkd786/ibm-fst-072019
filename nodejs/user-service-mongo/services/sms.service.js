const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'f2be0b10',
  apiSecret: 'cXm6jWCsoHaZtZ8Z',
});

const from = 'Nexmo';
const to = '7415548497';
const text = 'Hello Mohsin Here';

nexmo.message.sendSms(from, to, text);