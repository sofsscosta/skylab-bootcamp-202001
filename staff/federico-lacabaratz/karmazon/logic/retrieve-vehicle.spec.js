describe('retrieveVehicle', () => {
    it('should succeed on valid ID#', done => {
        
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNjM2NmYzQxMDQ0ZTAwMTU0NDUwY2EiLCJpYXQiOjE1ODEwMTYwODUsImV4cCI6MTU4MTAxOTY4NX0.kMTJu-yC5usghKsHRUSyajaLlhnR2tdJkd_6pa-fBIw"

        const id = 'FJV58'
        
        retrieveVehicle(token, id, (error, vehicle) => {
            expect(error).toBeUndefined()
            expect(vehicle).toBeDefined()
            expect(vehicle.id).toBeDefined(id)
            expect(vehicle.id).not.toBeInstanceOf(Error)

            expect(typeof vehicle.id).toBe('string')
            expect(typeof vehicle.name).toBe('string')
            expect(typeof vehicle.image).toBe('string')
            expect(typeof vehicle.year).toBe('number')
            expect(typeof vehicle.color).toBe('string')
            expect(typeof vehicle.maker).toBe('string')
            expect(typeof vehicle.collection).toBe('string')
            expect(typeof vehicle.style).toBe('string')
            expect(typeof vehicle.description).toBe('string')
            expect(typeof vehicle.price).toBe('number')
            expect(typeof vehicle.url).toBe('string')

            done()
        })
    })

    it('should return null on non-matching vehicle id', done => {
        
        const id = 'non-valid-id'

        retrieveVehicle(token, id, (error, vehicle) => {
            expect(error).toBeUndefined()
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle).toBeNull()

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => 
            retrieveVehicle(token, undefined, (error, vehicle) => {})
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() => 
            retrieveVehicle(token, 1, (error, vehicle) => {})
        ).toThrowError(TypeError, '1 is not a string')

        expect(() => 
            retrieveVehicle(token, true, (error, vehicle) => {})
        ).toThrowError(TypeError, 'true is not a string')

        expect(() => 
            retrieveVehicle(token, {}, (error, vehicle) => {})
        ).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => 
            retrieveVehicle(token, '', undefined)
        ).toThrowError(TypeError, 'undefined is not a function')

        expect(() => 
            retrieveVehicle(token, '', 1)
        ).toThrowError(TypeError, '1 is not a function')

        expect(() => 
            retrieveVehicle(token, '', true)
        ).toThrowError(TypeError, 'true is not a function')

        expect(() => 
            retrieveVehicle(token, '', {})
        ).toThrowError(TypeError, '[object Object] is not a function')
    })
})