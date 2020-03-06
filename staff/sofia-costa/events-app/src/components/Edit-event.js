import React from 'react'

function EditEvent({ onSubmit, deleteEvent }) {
    return <form onSubmit={_event => {
        _event.preventDefault()

        const title = _event.target.title.value
        const description = _event.target.description.value
        const location = _event.target.location.value
        const date = _event.target.date.value

        onSubmit({title, description, location, date})
    }}>
        <input type='text' name="title" placeholder="title"/>
        <input type='text' name="description" placeholder="description"/>
        <input type='text' name="location" placeholder="location"/>
        <input type='date' name="date" placeholder="date"/>
        <button>Ok!</button>

        {/* <button onClick={() => deleteEvent(event.id)}>Delete event</button> */}

    </form>
}

export default EditEvent