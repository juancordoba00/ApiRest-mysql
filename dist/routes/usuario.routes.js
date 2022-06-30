"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuario_controller_1 = require("../controllers/usuario.controller");
exports.router = express_1.Router();
exports.router.get('/', usuario_controller_1.getUsuarios);
exports.router.get('/:id', usuario_controller_1.getUsuario);
exports.router.post('/', usuario_controller_1.postUsuario);
exports.router.put('/:id', usuario_controller_1.putUsuario);
exports.router.delete('/:id', usuario_controller_1.deleteUsuario);
//# sourceMappingURL=usuario.routes.js.map