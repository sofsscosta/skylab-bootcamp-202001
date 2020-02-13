describe('updateUser', () => {
    /*let name, surname, username, password

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        username = 'username-' + Math.random()
        password = 'password-' + Math.random()
    })*/

    it('should fail on non-object newUser parametre', () => {
        expect(() => updateUser(1, 'test', () => { })).toThrowError(TypeError, '1 is not an object')
        expect(() => updateUser(true, 'test', () => { })).toThrowError(TypeError, 'true is not an object')
        expect(() => updateUser(undefined, 'test', () => { })).toThrowError(Error, 'undefined is not an object')
        expect(() => updateUser('', 'test', () => { })).toThrowError(Error, ' is not an object')
    })

    it('should fail on empty object newUser parametre', () => {
        expect(() => updateUser({}, 'test', () => { })).toThrowError(Error, '[object Object] is empty')
    })

    it('should fail if token is not a string', () => {
        expect(() => updateUser({ username: "test" }, 1, () => { })).toThrowError(TypeError, '1 is not a string')
        expect(() => updateUser({ username: "test" }, true, () => { })).toThrowError(TypeError, 'true is not a string')
        expect(() => updateUser({ username: "test" }, undefined, () => { })).toThrowError(TypeError, 'undefined is not a string')
        expect(() => updateUser({ username: "test" }, null, () => { })).toThrowError(TypeError, 'null is not a string')
        expect(() => updateUser({ username: "test" }, {}, () => { })).toThrowError(TypeError, '[object Object] is not a string')
    })

    it('should fail if token is empty', ()=>{
        expect(() => updateUser({ username: "test" }, '', () => { })).toThrowError(Error, ' is empty')
    })

    it('should fail if callback is not a function', () => {
        expect(() => updateUser({ username: "test" }, 'test', 1)).toThrowError(TypeError, '1 is not a function')
        expect(() => updateUser({ username: "test" }, 'test', true)).toThrowError(TypeError, 'true is not a function')
        expect(() => updateUser({ username: "test" }, 'test', undefined)).toThrowError(TypeError, 'undefined is not a function')
        expect(() => updateUser({ username: "test" }, 'test', null)).toThrowError(TypeError, 'null is not a function')
        expect(() => updateUser({ username: "test" }, 'test', {})).toThrowError(TypeError, '[object Object] is not a function')
    })
})