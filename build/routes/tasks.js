"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/create')
    .get((req, res) => {
    console.log('prueba');
})
    .post((req, res) => {
    console.log(req.body);
    res.send('Saved');
});
exports.default = router;
