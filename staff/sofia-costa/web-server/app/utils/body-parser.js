function bodyParser (req, res, next) {

    let data = ''

    req.on('data', chunk => {
        data += chunk
    })

    req.on('end', () => {

        try {
            let body = {}

            data.split('&').forEach(ele => {
                const key = ele.split('=')[0]
                const value = ele.split('=')[1]
                body[key] = value
            })

            req.body = body

            next()

        }
        catch (error) {
            res.statusCode = 400
            return res.end(`error: ${error.message}`)

        }
    })
}

if(require !== undefined) {
    module.exports = bodyParser
}