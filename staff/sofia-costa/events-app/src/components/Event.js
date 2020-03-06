import React from 'react'
import Feedback from './Feedback'

function Event({ event, subscribe, edit, error }) {

    return <div>
        <h5>{event.title}</h5>
        <span>Description: {event.description}</span><br/>
        <span>Location: {event.location}</span><br/>
        <span>Date: {event.date}</span><br/>
        <span>ID: {event.id}</span><br/><br/>
        <button onClick={() => subscribe(undefined, event.id)}>I wanna go!</button>
        <button onClick={() => edit(event.id)}>Edit event</button>
        {error && <Feedback error={error}/>}
    </div>
}

export default Event