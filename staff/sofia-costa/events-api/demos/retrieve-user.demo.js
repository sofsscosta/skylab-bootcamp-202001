// TODO
const { retrieveUser } = require('../logic')
require('dotenv').config()

retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlNzQ4MTU4NS0xYTUzLTRmYjItOWE4OS04NzlhMGI0NWE0ODgiLCJpYXQiOjE1ODI3OTY1MzEsImV4cCI6MTU4MjgwMDEzMX0.I2V_Sx0vqPRj_Bjvo1iMdhkNtdH1kPhljRRjcxgSgdA')
    .then(user => console.log(user))
    .catch(error => console.error(error))