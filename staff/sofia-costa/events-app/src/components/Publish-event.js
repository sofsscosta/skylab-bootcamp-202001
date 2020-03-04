import React from 'react'

export default function ({onSubmit }) {
    return <section>
        <h1>Create an event!</h1>
        <form onSubmit={event => {
            event.preventDefault()

            const title = event.target.title.value
            const description = event.target.description.value
            const location = event.target.location.value
            const date = event.target.date.value

            onSubmit(undefined, title, description, location, date)
        }}>
            <input type="text" name="title" placeholder="title" />
            <input type="text" name="description" placeholder="description" />
            <input type="text" name="location" placeholder="location" />
            <input type="date" name="date" placeholder="date" />
            <button>Submit</button>
        </form>
    </section>
}