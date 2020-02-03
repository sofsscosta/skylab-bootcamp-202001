describe('retrieveVehicle', () => {
    it('should succeed on matching query', done => {
        retrieveVehicle('DHT15', result => {
            expect(result).toBeDefined()
            expect(result instanceof Object).toBe(true)

            expect(typeof result.id).toBe('string')
            expect(typeof result.name).toBe('string')
            expect(typeof result.image).toBe('string')
            // expect(typeof result.year).toBe('string')
            // expect(typeof result.color).toBe('string')
            expect(typeof result.maker).toBe('string')
            expect(typeof result.collection).toBe('string')
            // expect(typeof result.style).toBe('string')
            expect(typeof result.description).toBe('string')
            expect(typeof result.price).toBe('number')
            expect(typeof result.url).toBe('string')

            done()
        })
    })

    it('should succeed on non-matching query returning an empty array', done => {
        retrieveVehicle('FAKE__ID', result => {
            expect(result).toBeDefined()
            expect(result).toBe(null)
            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => retrieveVehicle(undefined, () => { })).toThrowError(TypeError, 'undefined is not a string')
        expect(() => retrieveVehicle(1, () => { })).toThrowError(TypeError, '1 is not a string')
        expect(() => retrieveVehicle(true, () => { })).toThrowError(TypeError, 'true is not a string')
        expect(() => retrieveVehicle('', () => { })).toThrowError(Error, 'id is empty')
        expect(() => retrieveVehicle({}, () => { })).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => retrieveVehicle('test', undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => retrieveVehicle('test', 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => retrieveVehicle('test', true)).toThrowError(TypeError, 'true is not a function')
        expect(() => retrieveVehicle('test', {})).toThrowError(TypeError, '[object Object] is not a function')
    })
})