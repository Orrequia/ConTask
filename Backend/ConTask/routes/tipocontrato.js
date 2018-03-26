const express = require('express');
const router = express.Router();

const passport = require('passport');

const tipocontratoController = require('../controllers/tipocontrato');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /tipocontrato 1. Crear un tipocontrato.
 * @apiVersion 0.1.0
 * @apiName  PostTipoContrato
 * @apiGroup TipoContrato
 * @apiDescription Crea un nuevo tipocontrato y lo almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del tipocontrato. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre del tipocontrato
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 *
 * @apiSuccess {Object[]} tipocontrato Array con los tipocontratos
 * @apiSuccess {Number} tipocontrato.id Id del tipocontrato
 * @apiSuccess {String} tipocontrato.nombre Nombre del tipocontrato
 * @apiSuccess {Date} tipocontrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipocontrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipocontrato": {
            "id": 1,
            "nombre": "Autonomo",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (422) Unprocessable-Entity Los valores introducidos violan las restricciones
 */
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all typeContract'), tipocontratoController.create);              // C

/**
 * @api {get} /tipocontrato 2. Listar tipocontratos.
 * @apiVersion 0.1.0
 * @apiName GetTipoContratos
 * @apiGroup TipoContrato
 * @apiDescription Devuelve todos los tipocontratos guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} tipocontratos Array con la tipocontrato
 * @apiSuccess {Number} tipocontratos.id Id del tipocontrato
 * @apiSuccess {String} tipocontratos.nombre Nombre del tipocontrato
 * @apiSuccess {Date} tipocontratos.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipocontratos.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipocontratos": [
            {
                "id": 1,
                "nombre": "Autonomo",
                "createdAt": "2018-03-19T17:43:47.416Z",
                "updatedAt": "2018-03-19T17:43:47.416Z",
            },
            ...
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all typeContract'), tipocontratoController.getAll);               // R

/**
 * @api {put} /tipocontrato/4 3. Modifica un tipocontrato.
 * @apiVersion 0.1.0
 * @apiName UpdateTipoContrato
 * @apiGroup TipoContrato
 * @apiDescription Modifica el tipocontrato, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del tipocontrato. No se recomienda introducir.
 * @apiParam {String} nombre Nombre del tipocontrato
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 *
 * @apiSuccess {Object[]} tipocontrato Array con los tipocontratos
 * @apiSuccess {Number} tipocontrato.id Id del tipocontrato
 * @apiSuccess {String} tipocontrato.nombre Nombre del tipocontrato
 * @apiSuccess {Date} tipocontrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipocontrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipocontrato": {
            "id": 1,
            "nombre": "Autonomo",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del tipocontrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un tipocontrato con id: 2"
    }
 */
router.put('/:tipocontrato_id', passport.authenticate('jwt', { session: false}), auth.can('all typeContract'), tipocontratoController.update);    // U

/**
 * @api {delete} /tipocontrato/4 4. Eliminar un tipocontrato.
 * @apiVersion 0.1.0
 * @apiName RemoveTipoContrato
 * @apiGroup TipoContrato
 * @apiDescription Elimina un tipocontrato de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "TipoContrato eliminado",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del tipocontrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un tipocontrato con id: 2"
    }
 */
router.delete('/:tipocontrato_id', passport.authenticate('jwt', { session: false}), auth.can('all typeContract'), tipocontratoController.remove); // D

module.exports = router;