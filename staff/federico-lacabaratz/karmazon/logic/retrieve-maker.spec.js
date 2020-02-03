describe('retrieveMaker', () => {
    it('should succeed on valid ID#', done => {
        
        const id = '20th-century-fox'
        
        retrieveMaker(id, vehicle => {
            expect(vehicle).toBeDefined()
            expect(vehicle.id).toBeDefined(id)
            expect(vehicle.id).not.toBeInstanceOf(Error)

            expect(typeof vehicle.id).toBe('string')
            expect(typeof vehicle.name).toBe('string')
            expect(typeof vehicle.url).toBe('string')

            done()
        })
    })

    it('should return null on non-matching vehicle id', done => {
        const id = 'non-valid-id'

        retrieveMaker(id, vehicle => {
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle).toBeNull()

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => 
            retrieveMaker(undefined, () => {})
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() => 
            retrieveMaker(1, () => {})
        ).toThrowError(TypeError, '1 is not a string')

        expect(() => 
            retrieveMaker(true, () => {})
        ).toThrowError(TypeError, 'true is not a string')

        expect(() => 
            retrieveMaker({}, () => {})
        ).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => 
            retrieveMaker('', undefined)
        ).toThrowError(TypeError, 'undefined is not a function')

        expect(() => 
            retrieveMaker('', 1)
        ).toThrowError(TypeError, '1 is not a function')

        expect(() => 
            retrieveMaker('', true)
        ).toThrowError(TypeError, 'true is not a function')

        expect(() => 
            retrieveMaker('', {})
        ).toThrowError(TypeError, '[object Object] is not a function')
    })
})