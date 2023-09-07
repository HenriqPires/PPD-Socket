
var express = require('express');
var router = express.Router();

router.route('/notificar')
    .get(function (req, res) {
        res.json({
            message: "testando essa rota"
        });
    });

module.exports = router;
