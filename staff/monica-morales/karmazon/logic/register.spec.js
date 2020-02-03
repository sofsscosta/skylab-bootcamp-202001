describe('register', () => {
    it('Should add the different values in the user', () =>{

        register('monica','morales', 'momorales', '123',(values) =>{
            expect(values.length).toBe(4)
        })
    })

    it('Should save good the dates', () => {
        register('monica','morales', 'momorales', '123', (values) =>{
            values.forEach((value) =>{
                expect(value.name).toBe('monica')
                expect(value.surname).toBe('morales')
                expect(value.usernameme).toBe('momorales')
                expect(value.password).toBe('123')
            })
        })
    })

    it('Should confirm that values are strings', () => {
        register('monica','morales', 'momorales', '123', (values) =>{
            
            values.forEach((value) => {
                expect(typeof value.name).toBe('string')
                expect(typeof value.susrname).toBe('string')
                expect(typeof value.username).toBe('string')
                expect(typeof value.password).toBe('string')
            });
        })
    })
         
    it('should fail if a dates of user is empty', () => {
        expect(() => {
            register(undefined, 'morales', 'momorales', '123')
        }).toThrowError(new Error, 'name is empty')

        expect(() =>{
            register('monica', undefined, 'momorales', '123')
        }).toThrowError(new Error, 'surname is empty')

        expect(() => {
            register('monica', 'morales', undefined, '123')
        }).toThrowError(new Error, 'username is empty')

        expect(() => {
            register('monica', 'morales', 'momorales', undefined)
        }).toThrowError(new Error, 'password is empty')
    })

})