const { models: { Item } } = require('data')

module.exports = async () => {

    let results = []

    let items = await Item.find()

    items.forEach(item => results.push({ id: item.id, name: item.name }))

    return results
}