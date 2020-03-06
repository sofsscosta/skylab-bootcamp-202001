import React from 'react'
import Event from './Event'
import Feedback from './Feedback'

function RetrieveSubscribed({ events, subscribe, user, edit, deleteEvent, error }) {

    return <section>
        <h1>Your subscribed Events:</h1>
        {events && events.map(event => <Event event={event} subscribe={subscribe} user={user} edit={edit} deleteEvent={deleteEvent}/>)}
        {/* {!events.length && <p>You have no events published yet!</p>} */}
        {error && <Feedback error={error} />}
    </section>

}

export default RetrieveSubscribed