import React from 'react'

function Home({user, onToPublishEvent, RetrievePublished, RetrieveLast}) {

    const { name } = user

    return <section>
        <h3>Hello <span>{name}</span>! It's a miracle this page has arrived so far, if only you knew! </h3>
        <nav>
            <button onClick={event => {
                event.preventDefault()
                onToPublishEvent()
            }}>Create an Event</button>
            <button onClick={event => {
                event.preventDefault()
                RetrievePublished()
            }}>See your published events</button>
            <button onClick={event => {
                event.preventDefault()
                RetrieveLast()
            }}>See the last events</button>
        </nav>
    </section>
}

export default Home