function Home (props) {

    const {user: {name, surname}} = props
    
    return `<h1>Welcome ${name} ${surname}! </h1>`

}

module.exports = Home
