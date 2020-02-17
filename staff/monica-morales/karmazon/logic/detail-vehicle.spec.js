describe('detail-vehicle',  () => {
    
    it('should fail on non-string id', () =>{
        expect(() => {
            retrieveVehicle(undefined, () => { })
        }).toThrowError(TypeError, 'undefined is not a string')

        expect(() => {
            retrieveVehicle(1, () => { })
        }).toThrowError(TypeError, '1 is not a string')

        expect(() => {
            retrieveVehicle(true, () => { })
        }).toThrowError(TypeError, 'true is not a string')

        expect(() => {
            retrieveVehicle({}, () => { })
        }).toThrowError(TypeError, '[object Object] is not a string')
    });

    it('should fail on non-function callback', () => {
        expect(() => {
            retrieveVehicle('', undefined)
        }).toThrowError(TypeError, 'undefined is not a function')

        expect(() => {
            retrieveVehicle('', 1)
        }).toThrowError(TypeError, '1 is not a function')

        expect(() => {
            retrieveVehicle('', true)
        }).toThrowError(TypeError, 'true is not a function')

        expect(() => {
            retrieveVehicle('', {})
        }).toThrowError(TypeError, '[object Object] is not a function')
    })
})