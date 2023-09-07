
var emitir = function (io) { 
    return function (req, res, next) {
        var notificar = req.query.notificacao || '';
        if (notificar != '') {
            io.emit('notificacao', notificar); 
            next(); 
        } else {
            next(); 
        }
    };
};

module.exports = emitir;
