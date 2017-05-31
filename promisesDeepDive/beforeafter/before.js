this._acl_getEntry(eventId, (err, eventEntry) => {
    if (err) return setImmediate(callback.bind(null, err));

    return this._acl_ensureEntryIsForAdminOrOwner(eventEntry, err => {
        if (err) {
            err = new error.client.Unauthorized('You must be an event admin or event owner to perform this action')
            this._ctx.telemetry.error(err);
            return setImmediate(callback.bind(null, err));
        }

        this._acl.getEntry(eventId, userId, (err, eventEntry) => {
            if (err) {
                console.log(err);
                err = new error.client.BadRequest(`This user doesn't exist on this event: ${userId}`);
                this._ctx.telemetry.error(err);
                return setImmediate(callback.bind(null, err));
            }

            this._connectToDb(this._buildEventsDbConnectionForSpecificUserAndEventId(eventEntry, eventId), (err, fb) => {
                if (err) {
                    this._ctx.telemetry.error("Failed to connect to firebase for commom properties");
                    this._ctx.telemetry.error(err);
                    return setImmediate(callback.bind(null, err));
                }

                this._ctx.telemetry.info("connected to firebase about to take snapshot of info route in commom properties route");

                const FirebaseDataSource = require('/Users/jakesiebers/Desktop/joy-jake/modules/app-browser/services/eventService/firebaseDataSource.js');

                const dataSource = new FirebaseDataSource.FirebaseDataSource(fb);

                const People = require('@withjoy/people');

                const inviteeSet = dataSource.getInviteeSetSource();
                const userSetSource = dataSource.getUserSetSource();

                const people = new People.People({
                    onChildAdded(){}
                }, {
                    inviteeWriter: inviteeSet,
                    userProfileWriter: userSetSource
                });

                Promise.all([
                  inviteeSet.addOnceListener(people.getInviteeListener()),
                  userSetSource.addOnceListener(people.getProfileListener())
                ]).then(() => {

                    people._assimilate(personId, `person-profile-${userId}`, (err, data) => {
                        if (err) return setImmediate(callback.bind(null, err));

                        return setImmediate(callback);
                    });

                }, err => {
                    return setImmediate(err);
                });


            });
        });
    });
});
