import React from 'react'

function Event({ event }) {

    return <div>
        <h5>Title: {event.title}</h5>
        <span>Description: {event.description}</span>
        <span>Location: {event.location}</span>
        <span>Date: {event.date}</span>
    </div>
}

export default Event