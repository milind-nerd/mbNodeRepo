const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user === 'milu')
    {
        req.user = {name: 'milind'}
    next()
    }
    else
    {
        res.send('Not Authorized');
    }
}

module.exports = authorize