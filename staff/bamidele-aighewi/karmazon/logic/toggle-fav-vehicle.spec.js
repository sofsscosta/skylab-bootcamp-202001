describe('toggleFavVehicle', () => {
    it('should fail on non string vehicleId', () => {
        expect(() => toggleFavVehicle(1, 'test', () => { })).toThrowError(TypeError, '1 is not a string')
        expect(() => toggleFavVehicle(false, 'test', () => { })).toThrowError(TypeError, 'false is not a string')
        expect(() => toggleFavVehicle(undefined, 'test', () => { })).toThrowError(TypeError, 'undefined is not a string')
        expect(() => toggleFavVehicle(null, 'test', () => { })).toThrowError(TypeError, 'null is not a string')
        expect(() => toggleFavVehicle({}, 'test', () => { })).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail if vehicleId is empty', () => {
        expect(() => toggleFavVehicle('', 'test', () => { })).toThrowError(Error, 'vehicleId is empty')
    })

    it('should fail on non string token', () => {
        expect(() => toggleFavVehicle('test', 1, () => { })).toThrowError(TypeError, '1 is not a string')
        expect(() => toggleFavVehicle('test', false, () => { })).toThrowError(TypeError, 'false is not a string')
        expect(() => toggleFavVehicle('test', undefined, () => { })).toThrowError(TypeError, 'undefined is not a string')
        expect(() => toggleFavVehicle('test', null, () => { })).toThrowError(TypeError, 'null is not a string')
        expect(() => toggleFavVehicle('test', {}, () => { })).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail if token is empty', () => {
        expect(() => toggleFavVehicle('test', '', () => { })).toThrowError(Error, 'token is empty')
    })

    it('should fail if token parts on split is not equal to 3', () => {
        expect(() => toggleFavVehicle('test', 'header.payload', () => { })).toThrowError(Error, 'token is invalid')
    })

    false && it('should fail if token does not contain "sub" in payload after decoding from base64 and JSON.parsing it', () => {
        expect(() => {
            const payload = btoa(JSON.stringify({ iat: "something" }))

            toggleFavVehicle('test', `header.${payload}.signature`, () => { })
        }).toThrowError(Error, 'Invalid token. "Sub" does not exist in token')
    })

    false && it('should fail if token is not a valid base64 string', () => {
        expect(() => {
            const payload = "just.random.string"

            toggleFavVehicle('test', payload, () => { })
        }).toThrowError(Error, 'token is not a valid base64 string')
    })    
})