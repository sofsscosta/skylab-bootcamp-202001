function setUrl(query) {
    const { protocol, host, pathname } = location

    let url = `${protocol}//${host}${pathname}`

    query ? url = `${url}?q=${query}` : url


    history.pushState({ path: url }, '', url)

    return url
}