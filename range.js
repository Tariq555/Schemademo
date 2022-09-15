module.exports = (req, res, next) => {
    res.header('content-Range', 'courses 0-20/20')

    next()



}