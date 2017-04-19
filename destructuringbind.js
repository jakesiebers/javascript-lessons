
// Destructuring bind

const getZoneIdFromAWSResponse = ({ HostedZones: [ zone ] }) => zone.Id;

const data = { eventId: 'asdfasf', something: 5 };
const { eventId, something } = data;
console.log(eventId, something);
