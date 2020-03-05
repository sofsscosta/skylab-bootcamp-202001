export default async function () {

    const retrieve = await fetch(`http://localhost:8085/eventslast`)

    const res = await retrieve.json()

    const results = await res

    if (!results) return new Error('No Events have been published recently!')

    return results

        // .then(response => response.text())
        // .then(_results => {
        //     if (_results) {

        //         const results = JSON.parse(_results)
        //         return results
        //     }
        //     else return 'You haven\'t published any events!'
        // })
        // .catch(error => console.log(error))
}