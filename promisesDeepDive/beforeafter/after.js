this._acl_getEntry(eventId)
  .then(
    eventEntry => this._acl_ensureEntryIsForAdminOrOwner(eventEntry)
      .catch(() => { throw new error.client.Unauthorized('You must be an event admin or event owner to perform this action'); })
  )
  .then(
    () => this._acl.getEntry(eventId, userId)
      .catch(() => { throw new error.client.BadRequest(`This user doesn't exist on this event: ${userId}`); })
  )
  .then(eventEntry => this._connectToDb(this._buildEventsDbConnectionForSpecificUserAndEventId(eventEntry, eventId)))
  .then(fb => {

    const FirebaseDataSource = require('/Users/jakesiebers/Desktop/joy-jake/modules/app-browser/services/eventService/firebaseDataSource.js');

    const dataSource = new FirebaseDataSource.FirebaseDataSource(fb);

    const People = require('@withjoy/people');

    const inviteeSet = dataSource.getInviteeSetSource();
    const userSetSource = dataSource.getUserSetSource();

    const people = new People.People({
      onChildAdded(){},
      onChildChanged(){}
    }, {
      inviteeWriter: inviteeSet,
      userProfileWriter: userSetSource
    });

    return Promise.all([
      inviteeSet.addOnceListener(people.getInviteeListener()),
      userSetSource.addOnceListener(people.getProfileListener())
    ])
      .then(() => people._assimilate(personId, `person-profile-${userId}`));

  })
  .then(
    () => callback(null, { success: true }),
    err => {
      this._ctx.telemetry.error(err);
      return setImmediate(callback.bind(null, err));
    }
  );
