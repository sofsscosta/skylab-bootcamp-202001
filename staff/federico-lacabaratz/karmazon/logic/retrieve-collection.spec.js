describe('retrieveCollection', () => {
    it('should succeed on valid ID#', done => {
        
        const id = 'hw-screen-time'
        
        retrieveCollection(id, vehicle => {
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

        retrieveCollection(id, vehicle => {
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle).toBeNull()

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => 
            retrieveCollection(undefined, () => {})
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() => 
            retrieveCollection(1, () => {})
        ).toThrowError(TypeError, '1 is not a string')

        expect(() => 
            retrieveCollection(true, () => {})
        ).toThrowError(TypeError, 'true is not a string')

        expect(() => 
            retrieveCollection({}, () => {})
        ).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => 
            retrieveCollection('', undefined)
        ).toThrowError(TypeError, 'undefined is not a function')

        expect(() => 
            retrieveCollection('', 1)
        ).toThrowError(TypeError, '1 is not a function')

        expect(() => 
            retrieveCollection('', true)
        ).toThrowError(TypeError, 'true is not a function')

        expect(() => 
            retrieveCollection('', {})
        ).toThrowError(TypeError, '[object Object] is not a function')
    })
})