const express = require('express');
const router = express.Router();

const passport = require('passport');

const trabajadorController = require('../controllers/trabajador');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /trabajador 1. Crear un trabajador.
 * @apiVersion 0.1.0
 * @apiName  PostTrabajador
 * @apiGroup Trabajador
 * @apiDescription Crea un nuevo trabajador y la almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del trabajador. No se recomienda introducir.
 * @apiParam {String} nombre Nombre del trabajador
 * @apiParam {String} [correo] Correo del trabajador
 * @apiParam {String} [telefono] Telefono del trabajador
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 * @apiParam {Number} [empresaId] Id de la empresa de la que es propietario.
 *
 * @apiSuccess {Object[]} trabajador Array con el trabajador
 * @apiSuccess {Number} trabajador.id Id del trabajador
 * @apiSuccess {String} trabajador.nombre Nombre del trabajador
 * @apiSuccess {String} trabajador.correo Correo del trabajador
 * @apiSuccess {String} trabajador.telefono Telefono del trabajador
 * @apiSuccess {Date} trabajador.createAt Fecha en la que es creada
 * @apiSuccess {Date} trabajador.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} trabajador.empresaId Id de la empresa que es propietario.
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
                "empresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (422) Unprocessable-Entity Los valores introducidos violan las restricciones
 */
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all employee'), trabajadorController.create);             // C

/**
 * @api {get} /trabajador 2. Listar trabajadores.
 * @apiVersion 0.1.0
 * @apiName GetTrabajadores
 * @apiGroup Trabajador
 * @apiDescription Devuelve todas loas trabajadores guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} trabajadores Array con el trabajador
 * @apiSuccess {Number} trabajadores.id Id del trabajador
 * @apiSuccess {String} trabajadores.nombre Nombre del trabajador
 * @apiSuccess {String} trabajadores.correo Correo del trabajador
 * @apiSuccess {String} trabajadores.telefono Telefono del trabajador
 * @apiSuccess {Date} trabajadores.createAt Fecha en la que es creada
 * @apiSuccess {Date} trabajadores.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} trabajadores.empresaId Id de la empresa que es propietario.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "trabajadores": [
 *          {
                "id": 3,
                "nombre": "Arturo",
                "correo": "arturo@mueble.com",
                "telefono": "987654321",
                "createdAt": "2018-03-21T11:13:22.997Z",
                "updatedAt": "2018-03-21T11:13:22.997Z",
                "empresaId": 1
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all employee'), trabajadorController.getAll);              // R

/**
 * @api {get} /trabajador/:trabajador_id 3. Listar un trabajador.
 * @apiVersion 0.1.0
 * @apiName GetTrabajador
 * @apiGroup Trabajador
 * @apiDescription Devuelve el trabajador correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} trabajador Array con el trabajador
 * @apiSuccess {Number} trabajador.id Id del trabajador
 * @apiSuccess {String} trabajador.nombre Nombre del trabajador
 * @apiSuccess {String} trabajador.correo Correo del trabajador
 * @apiSuccess {String} trabajador.telefono Telefono del trabajador
 * @apiSuccess {Date} trabajador.createAt Fecha en la que es creada
 * @apiSuccess {Date} trabajador.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} trabajador.empresaId Id de la empresa que es propietario.
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
                "empresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del trabajador introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un trabajador con id: 2"
    }
 */
router.get('/:trabajador_id', passport.authenticate('jwt', { session: false}), auth.can('all employee'), trabajadorController.get);       // R

/**
 * @api {put} /trabajador 4. Modifica un trabajador.
 * @apiVersion 0.1.0
 * @apiName UpdateTrabajador
 * @apiGroup Trabajador
 * @apiDescription Modifica el trabajador, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id del trabajador. No se recomienda introducir.
 * @apiParam {String} [nombre] Nombre del trabajador
 * @apiParam {String} [correo] Correo del trabajador
 * @apiParam {String} [telefono] Telefono del trabajador
 * @apiParam {Date} [createAt] Fecha en la que se crea
 * @apiParam {Date} [updateAt] Fecha en la que se modifica
 * @apiParam {Number} [empresaId] Id de la empresa de la que es propietario.
 *
 * @apiSuccess {Object[]} trabajador Array con el trabajador
 * @apiSuccess {Number} trabajador.id Id del trabajador
 * @apiSuccess {String} trabajador.nombre Nombre del trabajador
 * @apiSuccess {String} trabajador.correo Correo del trabajador
 * @apiSuccess {String} trabajador.telefono Telefono del trabajador
 * @apiSuccess {Date} trabajador.createAt Fecha en la que es creada
 * @apiSuccess {Date} trabajador.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} trabajador.empresaId Id de la empresa que es propietario.
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
                "empresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del trabajador introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un trabajador con id: 2"
    }
 */
router.put('/:trabajador_id', passport.authenticate('jwt', { session: false}), auth.can('all employee'), trabajadorController.update);    // U

/**
 * @api {delete} /trabajador 5. Eliminar un trabajador.
 * @apiVersion 0.1.0
 * @apiName RemoveTrabajador
 * @apiGroup Trabajador
 * @apiDescription Elimina un trabajador de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Trabajador eliminado",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id del trabajador introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe un trabajador con id: 2"
    }
 */
router.delete('/:trabajador_id', passport.authenticate('jwt', { session: false}), auth.can('all employee'), trabajadorController.remove); // D

module.exports = router;