const express = require('express');
const router = express.Router();

const passport = require('passport');

const tiendaController = require('../controllers/tienda');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /tienda 1. Crear una tienda.
 * @apiVersion 0.1.0
 * @apiName  PostTiendas
 * @apiGroup Tienda
 * @apiDescription Crea una nueva tienda y la almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la tienda. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre de la tienda
 * @apiParam {String} [direccion] Direccion de la tienda
 * @apiParam {String} [correo] Correo de la tienda
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 * @apiParam {Number} empresaId Id de la empresa a la que pertenece.
 * @apiParam {Number} responsableId Id del trabajador responsable de la tienda.
 * @apiParam {Number} [provinciaId] Id de la provincia
 *
 * @apiSuccess {Object[]} tienda Array con la tienda
 * @apiSuccess {Number} tienda.id Id de la tienda
 * @apiSuccess {String} tienda.nombre Nombre de la tienda
 * @apiSuccess {String} tienda.direccion Direccion de la tienda
 * @apiSuccess {String} tienda.correo Correo de la tienda
 * @apiSuccess {Date} tienda.createAt Fecha en la que es creada
 * @apiSuccess {Date} tienda.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} tienda.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} tienda.provinciaId Id de la provincia de la tienda
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tienda": {
            "id": 1,
            "nombre": "Tienda Chiclana",
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
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.create);              // C

/**
 * @api {get} /tienda 2. Listar tiendas.
 * @apiVersion 0.1.0
 * @apiName GetTiendas
 * @apiGroup Tienda
 * @apiDescription Devuelve todas las tiendas guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} tiendas Array con la tienda
 * @apiSuccess {Number} tiendas.id Id de la tienda
 * @apiSuccess {String} tiendas.nombre Nombre de la tienda
 * @apiSuccess {String} tiendas.direccion Direccion de la tienda
 * @apiSuccess {String} tiendas.correo Correo de la tienda
 * @apiSuccess {Date} tiendas.createAt Fecha en la que es creada
 * @apiSuccess {Date} tiendas.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} tiendas.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} tiendas.provinciaId Id de la provincia de la tienda
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tiendas": [
            {
                "id": 1,
                "nombre": "Tienda Chiclana",
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
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.getAll);               // R

/**
 * @api {get} /tienda/:tienda_id 3. Listar una tienda.
 * @apiVersion 0.1.0
 * @apiName GetTienda
 * @apiGroup Tienda
 * @apiDescription Devuelve la tienda correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} tienda Array con la tienda
 * @apiSuccess {Number} tienda.id Id de la tienda
 * @apiSuccess {String} tienda.nombre Nombre de la tienda
 * @apiSuccess {String} tienda.direccion Direccion de la tienda
 * @apiSuccess {String} tienda.correo Correo de la tienda
 * @apiSuccess {Date} tienda.createAt Fecha en la que es creada
 * @apiSuccess {Date} tienda.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} tienda.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} tienda.provinciaId Id de la provincia de la tienda
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tienda": {
            "id": 1,
            "nombre": "Tienda Chiclana",
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
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.get('/:tienda_id', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.get);       // R

/**
 * @api {put} /tienda 4. Modifica una tienda.
 * @apiVersion 0.1.0
 * @apiName UpdateTienda
 * @apiGroup Tienda
 * @apiDescription Modifica la tienda, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la tienda. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre de la tienda
 * @apiParam {String} [direccion] Direccion de la tienda
 * @apiParam {String} [correo] Correo de la tienda
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 * @apiParam {Number} [empresaId] Id de la empresa a la que pertenece.
 * @apiParam {Number} [responsableId] Id del trabajador responsable de la tienda.
 * @apiParam {Number} [provinciaId] Id de la provincia
 *
 * @apiSuccess {Object[]} tienda Array con la tienda
 * @apiSuccess {Number} tienda.id Id de la tienda
 * @apiSuccess {String} tienda.nombre Nombre de la tienda
 * @apiSuccess {String} tienda.direccion Direccion de la tienda
 * @apiSuccess {String} tienda.correo Correo de la tienda
 * @apiSuccess {Date} tienda.createAt Fecha en la que es creada
 * @apiSuccess {Date} tienda.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} tienda.empresaId Id de la empresa a la que pertenece
 * @apiSuccess {Number} tienda.provinciaId Id de la provincia de la tienda
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "tienda": {
            "id": 1,
            "nombre": "Tienda Chiclana",
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
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.put('/:tienda_id', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.update);    // U

/**
 * @api {delete} /tienda 5. Eliminar una tienda.
 * @apiVersion 0.1.0
 * @apiName RemoveTienda
 * @apiGroup Tienda
 * @apiDescription Elimina una tienda de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Tienda eliminada",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.delete('/:tienda_id', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.remove); // D

/**
 * @api {get} /tienda/:tienda_id 6. Listar los trabajadores de una tienda
 * @apiVersion 0.1.0
 * @apiName GetTrabajadoresDeTienda
 * @apiGroup Tienda
 * @apiDescription Devuelve los trabajdores de la tienda correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} trabajadores Array con todos los trabajadores de la empresa
 * @apiSuccess {Number} trabajadores.id Id del trabajadores
 * @apiSuccess {String} trabajadores.nombre Nombre del trabajadores
 * @apiSuccess {String} trabajadores.correo Correo del trabajadores
 * @apiSuccess {String} trabajadores.telefono Telefono del trabajadores
 * @apiSuccess {Date} trabajadores.createAt Fecha en la que es creada
 * @apiSuccess {Date} trabajadores.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} trabajadores.empresaId Id de la empresa que es propietario dicho trabajador
 * @apiSuccess {Object[]} tienda_trabajador Campos de la tabla que conecta la tienda con el trabajador.
 * @apiSuccess {Date} tienda_trabajador.createAt Fecha en la que es creada la conexión
 * @apiSuccess {Date} tienda_trabajador.updateAt Fecha en la que es modificada la conexión
 * @apiSuccess {Number} tienda_trabajador.tiendaId Id de la tienda conectada
 * @apiSuccess {Number} tienda_trabajador.trabajadorId Id del trabajador conectado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "trabajadores": [
            {
                "id": 3,
                "nombre": "Arturo",
                "correo": "arturo@mueble.com",
                "telefono": "987654321",
                "createdAt": "2018-03-21T11:13:22.997Z",
                "updatedAt": "2018-03-21T11:13:22.997Z",
                "empresaId": 1,
                "tienda_trabajador": {
                    "createdAt": "2018-03-22T08:45:16.409Z",
                    "updatedAt": "2018-03-22T08:45:16.409Z",
                    "tiendaId": 14,
                    "trabajadorId": 3
                }
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.get('/:tienda_id/trabajador', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.getEmployee);

/**
 * @api {get} /tienda/:tienda_id 7. Añadir un nuevo trabajador a la tienda
 * @apiVersion 0.1.0
 * @apiName AddTrabajadorALaTienda
 * @apiGroup Tienda
 * @apiDescription Añade al trabajador en la tienda y devuelve al trabajador añadido con la entrada de la tabla que los conecta.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} trabajadorId Id del trabajador que se quiere añadir a la lista de trabajadores.
 *
 * @apiSuccess {Object[]} trabajador Array con todos los trabajadores de la empresa
 * @apiSuccess {Number} trabajador.id Id del trabajadores
 * @apiSuccess {String} trabajador.nombre Nombre del trabajadores
 * @apiSuccess {String} trabajador.correo Correo del trabajadores
 * @apiSuccess {String} trabajador.telefono Telefono del trabajadores
 * @apiSuccess {Date} trabajador.createAt Fecha en la que es creada
 * @apiSuccess {Date} trabajador.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} trabajador.empresaId Id de la empresa que es propietario dicho trabajador
 * @apiSuccess {Object[]} tienda_trabajador Campos de la tabla que conecta la tienda con el trabajador.
 * @apiSuccess {Date} tienda_trabajador.createAt Fecha en la que es creada la conexión
 * @apiSuccess {Date} tienda_trabajador.updateAt Fecha en la que es modificada la conexión
 * @apiSuccess {Number} tienda_trabajador.tiendaId Id de la tienda conectada
 * @apiSuccess {Number} tienda_trabajador.trabajadorId Id del trabajador conectado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "trabajador": {
            "id": 3,
            "nombre": "Arturo",
            "correo": "arturo@mueble.com",
            "telefono": "987654321",
            "createdAt": "2018-03-21T11:13:22.997Z",
            "updatedAt": "2018-03-21T11:13:22.997Z",
            "empresaId": 1,
            "tienda_trabajador": {
                "createdAt": "2018-03-22T08:45:16.409Z",
                "updatedAt": "2018-03-22T08:45:16.409Z",
                "tiendaId": 14,
                "trabajadorId": 3
            }
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar o el trabajador no existe.
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.post('/:tienda_id/trabajador', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.addEmployee);

/**
 * @api {delete} /tienda 8. Eliminar un trabajador de la tienda.
 * @apiVersion 0.1.0
 * @apiName RemoveTrabajdorDeTienda
 * @apiGroup Tienda
 * @apiDescription Elimina un trabajador de la tienda de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Trabajador eliminado de la tienda",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.delete('/:tienda_id/trabajador/:trabajador_id', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.removeEmployee);

/**
 * @api {get} /tienda/:tienda_id 9. Listar las mochilas de una tienda.
 * @apiVersion 0.1.0
 * @apiName GetMochilasDeTienda
 * @apiGroup Tienda
 * @apiDescription Devuelve las mochilas de la tienda correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} mochila Campos de la mochila
 * @apiSuccess {Number} mochila.id Id de la tienda
 * @apiSuccess {String} mochila.licencia Licencia de la mochila
 * @apiSuccess {Date} mochila.createAt Fecha en la que es creada
 * @apiSuccess {Date} mochila.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} mochila.tiendaId Id de la tienda a la que pertenece
 * @apiSuccess {Number} mochila.tipoMochila Id del tipo de la mochila.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "mochilas": [
 *          {
                "id": 1,
                "licencia": "TW 492728942982782029728298479248523498578",
                "createdAt": "2018-03-19T17:43:47.416Z",
                "updatedAt": "2018-03-19T17:43:47.416Z",
                "tiendaId": 1,
                "tipoMochila": 2,
            }
        ]
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la tienda introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una tienda con id: 2"
    }
 */
router.get('/:tienda_id/mochila', passport.authenticate('jwt', { session: false}), auth.can('all shop'), tiendaController.getPenPack);

module.exports = router;