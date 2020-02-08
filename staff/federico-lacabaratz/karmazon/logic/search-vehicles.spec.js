describe('searchVehicles', () => {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTNjM2NmYzQxMDQ0ZTAwMTU0NDUwY2EiLCJpYXQiOjE1ODEwMTYwODUsImV4cCI6MTU4MTAxOTY4NX0.kMTJu-yC5usghKsHRUSyajaLlhnR2tdJkd_6pa-fBIw"
    
    it('should succeed on matching query', done => {
        searchVehicles(token, 'batman', (error, results) => {
            expect(error).toBeUndefined()
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
        
        searchVehicles(token, 'asdasdfñlajsfklasldñkf', (error, results) => {
            expect(error).toBeUndefined()
            expect(results).toBeDefined()
            expect(results).toHaveLength(0)

            done()
        })
    })

    it('should fail on non-string query', () => {
        expect(() => 
            searchVehicles(token, undefined, (error, results) => {})
        ).toThrowError(TypeError, 'undefined is not a string')

        expect(() => 
            searchVehicles(token, 1, (error, results) => {})
        ).toThrowError(TypeError, '1 is not a string')

        expect(() => 
            searchVehicles(token, true, (error, results) => {})
        ).toThrowError(TypeError, 'true is not a string')

        expect(() => 
            searchVehicles(token, {}, (error, results) => {})
        ).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail on non-function callback', () => {
        expect(() => 
            searchVehicles(token, '', undefined)
        ).toThrowError(TypeError, 'undefined is not a function')

        expect(() => 
            searchVehicles(token, '', 1)
        ).toThrowError(TypeError, '1 is not a function')

        expect(() => 
            searchVehicles(token, '', true)
        ).toThrowError(TypeError, 'true is not a function')

        expect(() => 
            searchVehicles(token, '', {})
        ).toThrowError(TypeError, '[object Object] is not a function')
    })
})