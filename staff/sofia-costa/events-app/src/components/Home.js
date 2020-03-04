import React from 'react'

function Home(props) {

    const { name } = props.user

    return <section>
        <h3>Hello <span>{name}</span>! It's a miracle this page has arrived so far, if only you knew! </h3>
    </section>
}

export default Home