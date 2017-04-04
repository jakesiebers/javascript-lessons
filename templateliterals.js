
// template literals

process.env.protocol = 'http';
process.env.domain = 'withjoy.com';

const apiCallURL = path => `${process.env.protocol}://api.${process.env.domain}/${path}`;

const eventAPIURL = eventId => apiCallURL(`event/${eventId}`);

console.log(apiCallURL(''));
console.log(eventAPIURL(42));
