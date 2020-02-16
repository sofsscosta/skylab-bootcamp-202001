if (typeof Location.prototype.queryString === 'undefined')
    Object.defineProperty(Location.prototype, 'queryString', {
        set(queryString) { // { q: ..., price: ..., x: ... }
            let { href: url } = this

            const index = url.indexOf('?')

            let qs = ''

            const keys = Object.keys(queryString)

            for (let i = 0; i < keys.length; i++) {
                const key = keys[i]

                qs += `${key}=${queryString[key]}`

                if (i < keys.length - 1) qs += '&'
            }

            if (index > -1) {
                url = url.slice(0, index + 1).concat(qs)

                history.pushState({ path: url }, '', url)
            }

        },

        get() {
            const queryString = {}

            const { search } = this

            if (search.startsWith('?')) {
                const keyValues = search.substring(1).split('&')

                keyValues.forEach(keyValue => {
                    const [key, value] = keyValue.split('=')

                    queryString[key] = decodeURI(value)
                })
            }

            return queryString
        }
    })