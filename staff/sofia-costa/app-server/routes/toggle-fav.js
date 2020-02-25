const { createFav } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { token }, params: { id } } = req
    
    if(token) {
        createFav(id, token, error => {
            if (error){
                logger.warn(error)
                return res.redirect(req.get('referer'))
            }
            else
                res.redirect(req.get('referer'))
        })
    }
    else {
        res.redirect('/login')
    }
}