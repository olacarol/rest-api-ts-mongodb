"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createCustomerController_1 = require("../controllers/createCustomerController");
const router = (0, express_1.Router)();
function default_1(db) {
    router.post('/', (req, res) => (0, createCustomerController_1.createCustomerController)(req, res, db));
    return router;
}
exports.default = default_1;
