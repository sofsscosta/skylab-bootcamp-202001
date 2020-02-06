describe('retrieveStyle', () => {
    it('should succeed on valid ID#', done => {
        
        const id = 'entertainment'
        
        retrieveStyle(id, (error, vehicle) => {
            expect(error).toBeUndefined()
            expect(vehicle).toBeDefined()
            expect(vehicle.id).toBeDefined(id)
            expect(vehicle.id).not.toBeInstanceOf(Error)

            expect(typeof vehicle.id).toBe('string')
            expect(typeof vehicle.name).toBe('string')
            expect(typeof vehicle.image).toBe('string')
            expect(typeof vehicle.url).toBe('string')

            done()
        })
    })

    it('should return null on non-matching vehicle id', done => {
        const id = 'non-valid-id'

        retrieveStyle(id, (error, vehicle) => {
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle).toBeNull()

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => 
            retrieveStyle(undefined, () => {})
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() => 
            retrieveStyle(1, () => {})
        ).toThrowError(TypeError, '1 is not a string')

        expect(() => 
            retrieveStyle(true, () => {})
        ).toThrowError(TypeError, 'true is not a string')

        expect(() => 
            retrieveStyle({}, () => {})
        ).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => 
            retrieveStyle('', undefined)
        ).toThrowError(TypeError, 'undefined is not a function')

        expect(() => 
            retrieveStyle('', 1)
        ).toThrowError(TypeError, '1 is not a function')

        expect(() => 
            retrieveStyle('', true)
        ).toThrowError(TypeError, 'true is not a function')

        expect(() => 
            retrieveStyle('', {})
        ).toThrowError(TypeError, '[object Object] is not a function')
    })
})