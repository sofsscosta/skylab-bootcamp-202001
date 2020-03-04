export default async function (email, password) {
    if (typeof email !== 'string') throw new TypeError(`email ${email} is not a string`)
    if (typeof password !== 'string') throw new TypeError(`password ${password} is not a string`)

    const auth = await fetch(`http://localhost:8085/users/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    const res = await auth.json()

    const { token } = await res

    return token
}