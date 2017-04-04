
// Promises

const getEvent = eventId => new Promise((resolve, reject) => {
  $.get(`http://api.withjoy.com/events/${eventId}`, (err, data) => {
    if (err) reject(err);
    else resolve(data);
  });
});

const getEvent = eventId => {
  const p = Promise.defer();
  $.get(`http://api.withjoy.com/events/${eventId}`, (err, data) => {
    if (err) p.reject(err);
    else p.resolve(data);
  });
  return p;
};

// see currying
const getWithRetry = getter => function(){
  const request = () => getter.apply(null, arguments);
  return request()
    .fail(err => {
      if (err.isRetryable) return request();
      throw err;
    });
}

// see destructuring bind
const getEventName = eventId => getWithRetry(getEvent)(eventId)
  .then(({ name }) => name);
