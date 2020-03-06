const TEST_MONGODB_URL = process.env.REACT_APP_TEST_MONGODB_URL
const { mongoose, models: { User } } = require('events-data')
const { authenticate, retrieveUser } = require('./')

describe('authenticate-user', () => {

    beforeAll(async () => {
        await mongoose.connect(TEST_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await User.deleteMany()
    })

    let name, surname, email, password, id

    beforeEach(() => {
        name = 'name-' + Math.random()
        surname = 'surname-' + Math.random()
        email = Math.random() + '@mail.com'
        password = 'password-' + Math.random()
    })

    describe('when user already exists', () => {

        let _id, user

        beforeEach(async () => {

            user = await User.create({ name, surname, email, password })

            return _id = user.id
        })

        it('should succeed on correct credentials', async () => {
        
            let token = await authenticate(email, password)

            console.log(token)
            expect(typeof token).toBe('string')
            expect(token.length).not.toBe(0)

            let _user = await retrieveUser(token)

            expect(_user.email).toBe(user.email)
            expect(_user.name).toBe(user.name)
            expect(_user.surname).toBe(user.surname)

            //expect(id).toBe(_id)

        })

        it('should fail on incorrect password', async () => {

            try{
                await authenticate(email, `${password}--wrong`)
            } catch(error) {
                expect(error.message).toBe(`wrong credentials`)
            }

        })

        afterEach(async () => {
            return await User.deleteOne({ _id: _id })
        })
    })

    it('should fail when user does not exist', async () => {

        email = '11111@mail.com'

        try{
            await authenticate(email, password)
        } catch(error) {
            expect(error.message).toBe('wrong credentials')
        }


    })

    // it('should fail on non-string email', async () => {
    //     //expect(() =>
    //         let auth = await authenticate(1, password)

    //         expect(auth).toBeInstanceOf(TypeError)
    //         expect(auth.message).toBe(`email ${email} is not a string`)

    //     //).toThrowError(TypeError, `email ${email} is not a string`)

    //     expect(() =>
    //         authenticate(true, password)
    //     ).toThrowError(TypeError, `email ${email} is not a string`)

    //     expect(() =>
    //         authenticate(undefined, password)
    //     ).toThrowError(TypeError, `email ${email} is not a string`)
    // })

    // it('should fail on non-string password', () => {
    //     email = random() + '@mail.com'
    //     password = 1
    //     expect(() =>
    //         authenticate(email, password)
    //     ).toThrowError(TypeError, `password ${password} is not a string`)

    //     password = true
    //     expect(() =>
    //         authenticate(email, password)
    //     ).toThrowError(TypeError, `password ${password} is not a string`)

    //     password = undefined
    //     expect(() =>
    //         authenticate(email, password)
    //     ).toThrowError(TypeError, `password ${password} is not a string`)
    // })

    afterEach(async () => {
        return await User.deleteOne({ _id: id })
    })

    afterAll(async () => {
        await User.deleteMany()
        return await mongoose.disconnect()
    })
})