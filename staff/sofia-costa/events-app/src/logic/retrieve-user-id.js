const { retrieveUserId } = require('events-utils')

export default function (token) {
    const id = retrieveUserId(token)
    return id
}