const errorHandler = (err, req ,res, next) => {
    console.error(err);
    res.status(err.status || 500). json({erro: err.message ||'Error en el sevidor '});
};

module.exports = errorHandler;
