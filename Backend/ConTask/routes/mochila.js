const express = require('express');
const router = express.Router();

const passport = require('passport');

const mochilaController = require('../controllers/mochila');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /mochila 1. Crear una mochila.
 * @apiVersion 0.1.0
 * @apiName  PostMochilas
 * @apiGroup Mochila
 * @apiDescription Crea una nueva mochila y la almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la mochila. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre de la mochila
 * @apiParam {String} [direccion] Direccion de la mochila
 * @apiParam {String} [correo] Correo de la mochila
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 * @apiParam {Number} empresaId Id de la empresa a la que pertenece.
 * @apiParam {Number} responsableId Id del trabajador responsable de la mochila.
 * @apiParam {Number} [provinciaId] Id de la provincia
 *
 * @apiSuccess {Object[]} mochila Array con la mochila
 * @apiSuccess {Number} mochila.id Id de la mochila
 * @apiSuccess {String} mochila.nombre Nombre de la mochila
 * @apiSuccess {String} mochila.direccion Direccion de la mochila
 * @apiSuccess {String} mochila.correo Correo de la mochila
 * @apiSuccess {Date} mochila.createAt Fecha en la que es creada
 * @apiSuccess {Date} mochila.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} mochila.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} mochila.provinciaId Id de la provincia de la mochila
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "mochila": {
            "id": 1,
            "nombre": "Mochila Chiclana",
            "direccion": "Calle Badajoz numero 2",
            "correo": "chiclana@muebles.com",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
            "empresaId": 1,
            "provinciaId": 18
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (422) Unprocessable-Entity Los valores introducidos violan las restricciones
 */
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all penback'), mochilaController.create);              // C

/**
 * @api {get} /mochila 2. Listar mochilas.
 * @apiVersion 0.1.0
 * @apiName GetMochilas
 * @apiGroup Mochila
 * @apiDescription Devuelve todas las mochilas guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} mochilas Array con la mochila
 * @apiSuccess {Number} mochilas.id Id de la mochila
 * @apiSuccess {String} mochilas.nombre Nombre de la mochila
 * @apiSuccess {String} mochilas.direccion Direccion de la mochila
 * @apiSuccess {String} mochilas.correo Correo de la mochila
 * @apiSuccess {Date} mochilas.createAt Fecha en la que es creada
 * @apiSuccess {Date} mochilas.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} mochilas.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} mochilas.provinciaId Id de la provincia de la mochila
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "mochilas": [
            {
                "id": 1,
                "nombre": "Mochila Chiclana",
                "direccion": "Calle Badajoz numero 2",
                "correo": "chiclana@muebles.com",
                "createdAt": "2018-03-19T17:43:47.416Z",
                "updatedAt": "2018-03-19T17:43:47.416Z",
                "empresaId": 1,
                "provinciaId": 18
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all penback'), mochilaController.getAll);               // R

/**
 * @api {get} /mochila/:mochila_id 3. Listar una mochila.
 * @apiVersion 0.1.0
 * @apiName GetMochila
 * @apiGroup Mochila
 * @apiDescription Devuelve la mochila correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} mochila Array con la mochila
 * @apiSuccess {Number} mochila.id Id de la mochila
 * @apiSuccess {String} mochila.nombre Nombre de la mochila
 * @apiSuccess {String} mochila.direccion Direccion de la mochila
 * @apiSuccess {String} mochila.correo Correo de la mochila
 * @apiSuccess {Date} mochila.createAt Fecha en la que es creada
 * @apiSuccess {Date} mochila.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} mochila.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} mochila.provinciaId Id de la provincia de la mochila
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "mochila": {
            "id": 1,
            "nombre": "Mochila Chiclana",
            "direccion": "Calle Badajoz numero 2",
            "correo": "chiclana@muebles.com",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
            "empresaId": 1,
            "provinciaId": 18
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la mochila introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una mochila con id: 2"
    }
 */
router.get('/:mochila_id', passport.authenticate('jwt', { session: false}), auth.can('all penback'), mochilaController.get);       // R

/**
 * @api {put} /mochila 4. Modifica una mochila.
 * @apiVersion 0.1.0
 * @apiName UpdateMochila
 * @apiGroup Mochila
 * @apiDescription Modifica la mochila, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la mochila. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre de la mochila
 * @apiParam {String} [direccion] Direccion de la mochila
 * @apiParam {String} [correo] Correo de la mochila
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 * @apiParam {Number} [empresaId] Id de la empresa a la que pertenece.
 * @apiParam {Number} [responsableId] Id del trabajador responsable de la mochila.
 * @apiParam {Number} [provinciaId] Id de la provincia
 *
 * @apiSuccess {Object[]} mochila Array con la mochila
 * @apiSuccess {Number} mochila.id Id de la mochila
 * @apiSuccess {String} mochila.nombre Nombre de la mochila
 * @apiSuccess {String} mochila.direccion Direccion de la mochila
 * @apiSuccess {String} mochila.correo Correo de la mochila
 * @apiSuccess {Date} mochila.createAt Fecha en la que es creada
 * @apiSuccess {Date} mochila.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} mochila.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} mochila.provinciaId Id de la provincia de la mochila
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "mochila": {
            "id": 1,
            "nombre": "Mochila Chiclana",
            "direccion": "Calle Badajoz numero 2",
            "correo": "chiclana@muebles.com",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
            "empresaId": 1,
            "provinciaId": 18
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la mochila introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una mochila con id: 2"
    }
 */
router.put('/:mochila_id', passport.authenticate('jwt', { session: false}), auth.can('all penback'), mochilaController.update);    // U

/**
 * @api {delete} /mochila 5. Eliminar una mochila.
 * @apiVersion 0.1.0
 * @apiName RemoveMochila
 * @apiGroup Mochila
 * @apiDescription Elimina una mochila de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Mochila eliminada",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la mochila introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una mochila con id: 2"
    }
 */
router.delete('/:mochila_id', passport.authenticate('jwt', { session: false}), auth.can('all penback'), mochilaController.remove); // D

module.exports = router;