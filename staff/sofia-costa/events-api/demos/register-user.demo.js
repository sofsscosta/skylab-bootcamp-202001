const { registerUser } = require('../logic')

registerUser('Pepito', 'Grillo', 'pepigri5@mail.com', '123')
    .then(() => console.log('registered'))
    .catch(error => console.error(error))