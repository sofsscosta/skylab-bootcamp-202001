const { createFav } = require('../logic')
const { logger } = require('../utils')

module.exports = (req, res) => {
    const { session: { token }, params: { id } } = req
    
    try {

        if(token) {
            createFav(id, token)
            .then(() => {
    
                res.redirect(req.get('referer'))
    
            })
            .catch(error => {
                logger.warn(error)
                return res.redirect(req.get('referer'))
            })
        }
        else {
            res.redirect('/login')
        }
        
    } catch(error) {
        logger.warn(error)
        return res.redirect(req.get('referer'))
    }
    
}