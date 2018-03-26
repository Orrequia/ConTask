const express = require('express');
const router = express.Router();

const passport = require('passport');

const tipomochilaController = require('../controllers/tipomochila');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /tipomochila 1. Crear un tipomochila.
 * @apiVersion 0.1.0
 * @apiName  PostTipoMochila
 * @apiGroup TipoMochila
 * @apiDescription Crea un nuevo tipomochila y lo almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del tipomochila. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre del tipomochila
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 *
 * @apiSuccess {Object[]} tipomochila Array con los tipomochilas
 * @apiSuccess {Number} tipomochila.id Id del tipomochila
 * @apiSuccess {String} tipomochila.nombre Nombre del tipomochila
 * @apiSuccess {Date} tipomochila.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipomochila.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipomochila": {
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
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all typePenback'), tipomochilaController.create);              // C

/**
 * @api {get} /tipomochila 2. Listar tipomochilas.
 * @apiVersion 0.1.0
 * @apiName GetTipoMochilas
 * @apiGroup TipoMochila
 * @apiDescription Devuelve todos los tipomochilas guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} tipomochilas Array con la tipomochila
 * @apiSuccess {Number} tipomochilas.id Id del tipomochila
 * @apiSuccess {String} tipomochilas.nombre Nombre del tipomochila
 * @apiSuccess {Date} tipomochilas.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipomochilas.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipomochilas": [
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
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all typePenback'), tipomochilaController.getAll);               // R

/**
 * @api {put} /tipomochila/4 3. Modifica un tipomochila.
 * @apiVersion 0.1.0
 * @apiName UpdateTipoMochila
 * @apiGroup TipoMochila
 * @apiDescription Modifica el tipomochila, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del tipomochila. No se recomienda introducir.
 * @apiParam {String} nombre Nombre del tipomochila
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 *
 * @apiSuccess {Object[]} tipomochila Array con los tipomochilas
 * @apiSuccess {Number} tipomochila.id Id del tipomochila
 * @apiSuccess {String} tipomochila.nombre Nombre del tipomochila
 * @apiSuccess {Date} tipomochila.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipomochila.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipomochila": {
            "id": 1,
            "nombre": "Autonomo",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del tipomochila introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un tipomochila con id: 2"
    }
 */
router.put('/:tipomochila_id', passport.authenticate('jwt', { session: false}), auth.can('all typePenback'), tipomochilaController.update);    // U

/**
 * @api {delete} /tipomochila/4 4. Eliminar un tipomochila.
 * @apiVersion 0.1.0
 * @apiName RemoveTipoMochila
 * @apiGroup TipoMochila
 * @apiDescription Elimina un tipomochila de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "TipoMochila eliminado",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del tipomochila introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un tipomochila con id: 2"
    }
 */
router.delete('/:tipomochila_id', passport.authenticate('jwt', { session: false}), auth.can('all typePenback'), tipomochilaController.remove); // D

module.exports = router;