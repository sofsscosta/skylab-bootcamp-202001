import React from 'react'
import Event from './Event'

function RetrievePublished({ events }) {
    return <section>
        <h1>Your published Events:</h1>
        {events && events.map(event => <Event event={event} />)}
        {/* {!events.length && <p>You have no events published yet!</p>} */}
    </section>
}

export default RetrievePublished