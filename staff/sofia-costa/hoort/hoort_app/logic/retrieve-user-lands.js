const context = require('./context')
const { validate } = require('../hoort-utils')
const fetch = require('node-fetch')

module.exports = async function () {

    const token = await this.storage.getItem('token')

    const retrieve = await fetch(`${this.API_URL}/land/user`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })

    const lands = await retrieve.json()

    // let landsIds = []

    // lands.forEach(land => landsIds.push(land.id))

    const { error } = await lands

    if (error) throw new Error(error)

    // if (!lands.length) throw new Error('You have no lands yet!')

    return lands
}.bind(context)