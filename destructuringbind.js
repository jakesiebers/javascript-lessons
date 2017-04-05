
// Destructuring bind

const getZoneIdFromAWSResponse = ({ HostedZones: [ zone ] }) => zone.Id;
