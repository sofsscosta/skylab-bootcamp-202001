import React from 'react'

function Feedback({ error }) {
    return <p style={{color: "red"}} >{error}</p>
}

export default Feedback