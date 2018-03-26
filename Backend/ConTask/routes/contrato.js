const express = require('express');
const router = express.Router();

const passport = require('passport');

const contratoController = require('../controllers/contrato');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /contrato 1. Crear un contrato.
 * @apiVersion 0.1.0
 * @apiName  PostContrato
 * @apiGroup Contrato
 * @apiDescription Crea un nuevo contrato y la almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del contrato. No se recomienda introducir.
 * @apiParam {Date} [fecha_inicio] Fecha inicio del contrato.
 * @apiParam {Date} [fecha_fin] Fecha fin del contrato.
 * @apiParam {Boolean} [pagado] Indica si está pagado el contrato.
 * @apiParam {Date} [createAt] Fecha en la que se crea.
 * @apiParam {Date} [updateAt] Fecha en la que se modifica.
 * @apiParam {Number} [empresaId] Id de la empresa a la que pertenece el contrato.
 *
 * @apiSuccess {Object[]} contrato Array con el contrato
 * @apiSuccess {Number} contrato.id Id del contrato
 * @apiSuccess {Date} contrato.fecha_inicio Fecha inicio del contrato
 * @apiSuccess {Date} contrato.fecha_fin Fecha fin del contrato
 * @apiSuccess {Boolean} contrato.pagado Indica si está pagado el contrato
 * @apiSuccess {Date} contrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} contrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} contrato.empresaId Id de la empresa a la que pertenece el contrato
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "contrato": {
            "id": 3,
            "fecha_inicio": "2018-03-21T11:13:22.997Z",
            "fecha_fin": "2019-03-21T11:13:22.997Z",
            "pagado": true,
            "createdAt": "2018-03-21T11:13:22.997Z",
            "updatedAt": "2018-03-21T11:13:22.997Z",
            "empresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (422) Unprocessable-Entity Los valores introducidos violan las restricciones
 */
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.create);             // C

/**
 * @api {get} /contrato 2. Listar contratos.
 * @apiVersion 0.1.0
 * @apiName GetContratos
 * @apiGroup Contrato
 * @apiDescription Devuelve todas loas contratos guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} contrato Array con el contrato
 * @apiSuccess {Number} contrato.id Id del contrato
 * @apiSuccess {Date} contrato.fecha_inicio Fecha inicio del contrato
 * @apiSuccess {Date} contrato.fecha_fin Fecha fin del contrato
 * @apiSuccess {Boolean} contrato.pagado Indica si está pagado el contrato
 * @apiSuccess {Date} contrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} contrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} contrato.empresaId Id de la empresa a la que pertenece el contrato
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "contrato": [
 *          {
                "id": 3,
                "fecha_inicio": "2018-03-21T11:13:22.997Z",
                "fecha_fin": "2019-03-21T11:13:22.997Z",
                "pagado": true,
                "createdAt": "2018-03-21T11:13:22.997Z",
                "updatedAt": "2018-03-21T11:13:22.997Z",
                "empresaId": 1
            }
        ]
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.getAll);              // R

/**
 * @api {get} /contrato/:contrato_id 3. Listar un contrato.
 * @apiVersion 0.1.0
 * @apiName GetContrato
 * @apiGroup Contrato
 * @apiDescription Devuelve el contrato correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} contrato Array con el contrato
 * @apiSuccess {Number} contrato.id Id del contrato
 * @apiSuccess {Date} contrato.fecha_inicio Fecha inicio del contrato
 * @apiSuccess {Date} contrato.fecha_fin Fecha fin del contrato
 * @apiSuccess {Boolean} contrato.pagado Indica si está pagado el contrato
 * @apiSuccess {Date} contrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} contrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} contrato.empresaId Id de la empresa a la que pertenece el contrato
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "contrato": {
            "id": 3,
            "fecha_inicio": "2018-03-21T11:13:22.997Z",
            "fecha_fin": "2019-03-21T11:13:22.997Z",
            "pagado": true,
            "createdAt": "2018-03-21T11:13:22.997Z",
            "updatedAt": "2018-03-21T11:13:22.997Z",
            "empresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del contrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un contrato con id: 2"
    }
 */
router.get('/:contrato_id', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.get);       // R

/**
 * @api {put} /contrato 4. Modifica un contrato.
 * @apiVersion 0.1.0
 * @apiName UpdateContrato
 * @apiGroup Contrato
 * @apiDescription Modifica el contrato, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del contrato. No se recomienda introducir.
 * @apiParam {Date} [fecha_inicio] Fecha inicio del contrato.
 * @apiParam {Date} [fecha_fin] Fecha fin del contrato.
 * @apiParam {Boolean} [pagado] Indica si está pagado el contrato.
 * @apiParam {Date} [createAt] Fecha en la que se crea.
 * @apiParam {Date} [updateAt] Fecha en la que se modifica.
 * @apiParam {Number} [empresaId] Id de la empresa a la que pertenece el contrato.
 *
 * @apiSuccess {Object[]} contrato Array con el contrato
 * @apiSuccess {Number} contrato.id Id del contrato
 * @apiSuccess {Date} contrato.fecha_inicio Fecha inicio del contrato
 * @apiSuccess {Date} contrato.fecha_fin Fecha fin del contrato
 * @apiSuccess {Boolean} contrato.pagado Indica si está pagado el contrato
 * @apiSuccess {Date} contrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} contrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} contrato.empresaId Id de la empresa a la que pertenece el contrato
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "contrato": {
            "id": 3,
            "fecha_inicio": "2018-03-21T11:13:22.997Z",
            "fecha_fin": "2019-03-21T11:13:22.997Z",
            "pagado": true,
            "createdAt": "2018-03-21T11:13:22.997Z",
            "updatedAt": "2018-03-21T11:13:22.997Z",
            "empresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del contrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un contrato con id: 2"
    }
 */
router.put('/:contrato_id', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.update);    // U

/**
 * @api {delete} /contrato 5. Eliminar un contrato.
 * @apiVersion 0.1.0
 * @apiName RemoveContrato
 * @apiGroup Contrato
 * @apiDescription Elimina un contrato de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Contrato eliminado",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del contrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un contrato con id: 2"
    }
 */
router.delete('/:contrato_id', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.remove); // D

//Linea de Contratos
/**
 * @api {post} /contrato/1/lineacontrato 1. Crear una linea de contrato.
 * @apiVersion 0.1.0
 * @apiName  PostLineaContratoAlContrato
 * @apiGroup Contrato
 * @apiDescription Crea una nueva linea de contrato y la almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la linea de contrato. No se recomienda introducir.
 * @apiParam {Float} [precio] Precio de la linea del contrato.
 * @apiParam {Date} [createAt] Fecha en la que se crea.
 * @apiParam {Date} [updateAt] Fecha en la que se modifica.
 * @apiParam {Number} [contratoId] Id del contrato a la que pertenece la linea de contrato.
 * @apiParam {Number} [mochilaId] Id de la mochila que contiene la linea de contrato.
 *
 * @apiSuccess {Object[]} lineacontrato Array con la linea de contrato
 * @apiSuccess {Number} lineacontrato.id Id de la liena del contrato
 * @apiSuccess {Float} lineacontrato.precio Precio de la linea del contrato.
 * @apiSuccess {Date} lineacontrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} lineacontrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} lineacontrato.contratoId Id del contrato a la que pertenece la linea de contrato.
 * @apiSuccess {Number} lineacontrato.mochilaId Id de la mochila que contiene la linea de contrato.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "lineaContrato": {
            "id": 4,
            "precio": 2003.39,
            "contratoId": 1,
            "updatedAt": "2018-03-22T17:42:50.401Z",
            "createdAt": "2018-03-22T17:42:50.401Z",
            "mochilaId": null,
            "tipocontratoId": null
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (422) Unprocessable-Entity Los valores introducidos violan las restricciones
 */
router.post('/:contrato_id/lineacontrato', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.addLineContract);

/**
 * @api {get} /contrato/1/lineacontrato 2. Listar las lineas de contrato de un contrato.
 * @apiVersion 0.1.0
 * @apiName GetLineaDeContratos
 * @apiGroup Contrato
 * @apiDescription Devuelve todas las lineas de contratos del contrato correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} lineacontrato Array con la linea de contrato
 * @apiSuccess {Number} lineacontrato.id Id de la liena del contrato
 * @apiSuccess {Float} lineacontrato.precio Precio de la linea del contrato.
 * @apiSuccess {Date} lineacontrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} lineacontrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} lineacontrato.contratoId Id del contrato a la que pertenece la linea de contrato.
 * @apiSuccess {Number} lineacontrato.mochilaId Id de la mochila que contiene la linea de contrato.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "lineaContrato": [
 *          {
                "id": 4,
                "precio": 2003.39,
                "contratoId": 1,
                "updatedAt": "2018-03-22T17:42:50.401Z",
                "createdAt": "2018-03-22T17:42:50.401Z",
                "mochilaId": null,
                "tipocontratoId": null
            },
            ...
        ]
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/:contrato_id/lineacontrato', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.getLineContract);

/**
 * @api {put} /contrato/1/lineacontrato/1 4. Modifica una linea de contrato de un contrato.
 * @apiVersion 0.1.0
 * @apiName UpdateLineaDeContrato
 * @apiGroup Contrato
 * @apiDescription Modifica la linea de contrato, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la linea de contrato. No se recomienda introducir.
 * @apiParam {Float} [precio] Precio de la linea del contrato.
 * @apiParam {Date} [createAt] Fecha en la que se crea.
 * @apiParam {Date} [updateAt] Fecha en la que se modifica.
 * @apiParam {Number} [contratoId] Id del contrato a la que pertenece la linea de contrato.
 * @apiParam {Number} [mochilaId] Id de la mochila que contiene la linea de contrato.
 *
 * @apiSuccess {Object[]} lineacontrato Array con la linea de contrato
 * @apiSuccess {Number} lineacontrato.id Id de la liena del contrato
 * @apiSuccess {Float} lineacontrato.precio Precio de la linea del contrato.
 * @apiSuccess {Date} lineacontrato.createAt Fecha en la que es creada
 * @apiSuccess {Date} lineacontrato.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} lineacontrato.contratoId Id del contrato a la que pertenece la linea de contrato.
 * @apiSuccess {Number} lineacontrato.mochilaId Id de la mochila que contiene la linea de contrato.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "lineaContrato": {
            "id": 4,
            "precio": 2003.39,
            "contratoId": 1,
            "updatedAt": "2018-03-22T17:42:50.401Z",
            "createdAt": "2018-03-22T17:42:50.401Z",
            "mochilaId": null,
            "tipocontratoId": null
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la linea de contrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una linea de contrato con id: 2"
    }
 */
router.put('/:contrato_id/lineacontrato/:lineacontrato_id', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.updateLineContract);

/**
 * @api {delete} /contrato/1/lineacontrato/2 5. Eliminar una linea de contrato de un contrato.
 * @apiVersion 0.1.0
 * @apiName RemoveLineaDeContrato
 * @apiGroup Contrato
 * @apiDescription Elimina una linea de contrato de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Linea de contrato eliminada",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la linea de contrato introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una linea de contrato con id: 2"
    }
 */
router.delete('/:contrato_id/lineacontrato/:lineacontrato_id', passport.authenticate('jwt', { session: false}), auth.can('all contract'), contratoController.removeLineContract);

module.exports = router;