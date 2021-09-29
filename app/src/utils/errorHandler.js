import CreateHttpError from "http-errors";

export default async function errorHandler(error, req, res, next) {
    res.status( error.status || 400);
    res.json({
        status: error.status,
        message: error.message,
        stack: error.stack,
    })
    global.logger.error(`method:${req.method} - url:${req.url} - error status: ${error.statusCode} - error:${error.message} `);
}