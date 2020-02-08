describe('searchVehicles', () => {
    it('should succeed on matching query', done => {
        searchVehicles('batman', results => {
            expect(results).toBeDefined()
            expect(results.length).toBeGreaterThan(0)

            results.forEach(result => {
                expect(typeof result.id).toBe('string')
                expect(typeof result.name).toBe('string')
                expect(typeof result.thumbnail).toBe('string')
                expect(typeof result.price).toBe('number')
            })

            done()
        })
    })

    it('should succeed on non-matching query returning an empty array', done => {
        searchVehicles('asdasdfñlajsfklasldñkfjañlsjflasjflasjfñladjs', results => {
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() =>
            searchVehicles(undefined, () => { })
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() =>
            searchVehicles(1, () => { })
        ).toThrowError(TypeError, '1 is not a string')

        expect(() =>
            searchVehicles(true, () => { })
        ).toThrowError(TypeError, 'true is not a string')

        expect(() =>
            searchVehicles({}, () => { })
        ).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail if token is empty', () => {
        expect(() => toggleFavVehicle('test', '', () => { })).toThrowError(Error, 'token is empty')
    })

    it('should fail if token parts on split is not equal to 3', () => {
        expect(() => toggleFavVehicle('test', 'header.payload', () => { })).toThrowError(Error, 'token is invalid')
    })

    it('should fail on non-function callback', () => {
        expect(() =>
            searchVehicles('', undefined)
        ).toThrowError(TypeError, 'undefined is not a function')

        expect(() =>
            searchVehicles('', 1)
        ).toThrowError(TypeError, '1 is not a function')

        expect(() =>
            searchVehicles('', true)
        ).toThrowError(TypeError, 'true is not a function')

        expect(() =>
            searchVehicles('', {})
        ).toThrowError(TypeError, '[object Object] is not a function')
    })
})