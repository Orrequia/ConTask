const express = require('express');
const router = express.Router();

const passport = require('passport');

const tipoempresaController = require('../controllers/tipoempresa');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /tipoempresa 1. Crear un tipoempresa.
 * @apiVersion 0.1.0
 * @apiName  PostTipoEmpresa
 * @apiGroup TipoEmpresa
 * @apiDescription Crea un nuevo tipoempresa y lo almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del tipoempresa. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre del tipoempresa
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 *
 * @apiSuccess {Object[]} tipoempresa Array con los tipoempresas
 * @apiSuccess {Number} tipoempresa.id Id del tipoempresa
 * @apiSuccess {String} tipoempresa.nombre Nombre del tipoempresa
 * @apiSuccess {Date} tipoempresa.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipoempresa.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipoempresa": {
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
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all typeCompany'), tipoempresaController.create);              // C

/**
 * @api {get} /tipoempresa 2. Listar tipoempresas.
 * @apiVersion 0.1.0
 * @apiName GetTipoEmpresas
 * @apiGroup TipoEmpresa
 * @apiDescription Devuelve todos los tipoempresas guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} tipoempresas Array con la tipoempresa
 * @apiSuccess {Number} tipoempresas.id Id del tipoempresa
 * @apiSuccess {String} tipoempresas.nombre Nombre del tipoempresa
 * @apiSuccess {Date} tipoempresas.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipoempresas.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipoempresas": [
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
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all typeCompany'), tipoempresaController.getAll);               // R

/**
 * @api {put} /tipoempresa/4 3. Modifica un tipoempresa.
 * @apiVersion 0.1.0
 * @apiName UpdateTipoEmpresa
 * @apiGroup TipoEmpresa
 * @apiDescription Modifica el tipoempresa, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del tipoempresa. No se recomienda introducir.
 * @apiParam {String} nombre Nombre del tipoempresa
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 *
 * @apiSuccess {Object[]} tipoempresa Array con los tipoempresas
 * @apiSuccess {Number} tipoempresa.id Id del tipoempresa
 * @apiSuccess {String} tipoempresa.nombre Nombre del tipoempresa
 * @apiSuccess {Date} tipoempresa.createAt Fecha en la que es creada
 * @apiSuccess {Date} tipoempresa.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tipoempresa": {
            "id": 1,
            "nombre": "Autonomo",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del tipoempresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un tipoempresa con id: 2"
    }
 */
router.put('/:tipoempresa_id', passport.authenticate('jwt', { session: false}), auth.can('all typeCompany'), tipoempresaController.update);    // U

/**
 * @api {delete} /tipoempresa/4 4. Eliminar un tipoempresa.
 * @apiVersion 0.1.0
 * @apiName RemoveTipoEmpresa
 * @apiGroup TipoEmpresa
 * @apiDescription Elimina un tipoempresa de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "TipoEmpresa eliminado",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del tipoempresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un tipoempresa con id: 2"
    }
 */
router.delete('/:tipoempresa_id', passport.authenticate('jwt', { session: false}), auth.can('all typeCompany'), tipoempresaController.remove); // D

module.exports = router;