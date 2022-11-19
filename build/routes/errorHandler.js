export function errorHandler(err, req, res, next) {
    if (process.env.VERBOSE === 'true')
        console.error(err);
    res.status(res.statusCode || 500).send({
        error: process.env.DEVELOPMENT === 'true' ? err.message : 'Something failed!',
    });
    next();
}
//# sourceMappingURL=errorHandler.js.map