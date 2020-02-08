describe('retrieveVehicle', () => {
    it('should succeed on valid ID#', done => {
        
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNjM2NmYzQxMDQ0ZTAwMTU0NDUwY2EiLCJpYXQiOjE1ODEwMTYwODUsImV4cCI6MTU4MTAxOTY4NX0.kMTJu-yC5usghKsHRUSyajaLlhnR2tdJkd_6pa-fBIw"

        const ids = ['FYF46', 'FYF93', 'FYD43', 'FYD16', 'FYC00', 'FYC05', 'FYF75', 'FYB99', 'FYC82', 'FYD62', 'FYD19', 'FYC38', 'FYC55', 'FYD18', 'FJW82', 'FYG57', 'FYD55', 'FYD65', 'FJY64', 'FJY65']

        const id = ids.random()
        
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
    
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNjM2NmYzQxMDQ0ZTAwMTU0NDUwY2EiLCJpYXQiOjE1ODEwMTYwODUsImV4cCI6MTU4MTAxOTY4NX0.kMTJu-yC5usghKsHRUSyajaLlhnR2tdJkd_6pa-fBIw"
    
    it('should return null on non-matching vehicle id', done => {

        const id = 'fffffff'

        retrieveVehicle(token, id, (error, vehicle) => {
            expect(error).toBeUndefined()
            expect(vehicle).not.toBeInstanceOf(Error)

            expect(vehicle).toBeNull()

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => 
            retrieveVehicle(token, undefined, () => {})
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() => 
            retrieveVehicle(token, 1, () => {})
        ).toThrowError(TypeError, '1 is not a string')

        expect(() => 
            retrieveVehicle(token, true, () => {})
        ).toThrowError(TypeError, 'true is not a string')

        expect(() => 
            retrieveVehicle(token, {}, () => {})
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