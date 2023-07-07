//logger is middleware here
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear;

    console.log(method, url, time);

    //NEXT will send program to next function. If not used, page will be loading for infinte time
    next();
}

module.exports = logger;