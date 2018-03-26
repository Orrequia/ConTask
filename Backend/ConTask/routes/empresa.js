const express = require('express');
const router = express.Router();

const passport = require('passport');

const empresaController = require('../controllers/empresa');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {post} /empresa 1. Crear una empresa.
 * @apiVersion 0.1.0
 * @apiName  PostEmpresas
 * @apiGroup Empresa
 * @apiDescription Crea una nueva empresa y la almacena.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la empresa. No se recomienda introducir.
 * @apiParam {String} nif NIF de la empresa
 * @apiParam {String} nombre Nombre de la empresa
 * @apiParam {String} [notas] Notas de la empresa
 * @apiParam {String} [enlaceArchivos] Enlace a archivos de la empresa
 * @apiParam {Date} [createAt] Fecha en la que se creó
 * @apiParam {Date} [updateAt] Fecha en la que se modificó
 * @apiParam {Number} [tipoempresaId] Id del tipo de la empresa
 *
 * @apiSuccess {Object[]} empresa Array con todas las empresas
 * @apiSuccess {Number} empresa.id Id de la empresa
 * @apiSuccess {String} empresa.nif NIF de la empresa
 * @apiSuccess {String} empresa.nombre Nombre de la empresa
 * @apiSuccess {String} empresa.notas Notas de la empresa
 * @apiSuccess {String} empresa.enlaceArchivos Enlace a archivos de la empresa
 * @apiSuccess {Date} empresa.createAt Fecha en la que es creada
 * @apiSuccess {Date} empresa.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} empresa.tipoempresaId Id del tipo de la empresa
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "empresa": {
            "id": 1,
            "nif": "34567892K",
            "nombre": "Arturo S.L.",
            "notas": "Nos debe una llamada",
            "enlaceArchivos": "C://mis_datos/arturo.s.l./",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
            "tipoempresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (422) Unprocessable-Entity Los valores introducidos violan las restricciones
 */
router.post('/', passport.authenticate('jwt', { session: false}), auth.can('all company'), empresaController.create);              // C

/**
 * @api {get} /empresa 2. Listar empresas.
 * @apiVersion 0.1.0
 * @apiName GetEmpresas
 * @apiGroup Empresa
 * @apiDescription Devuelve todas las empresas guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} empresas Array con todas las empresas
 * @apiSuccess {Number} empresas.id Id de la empresa
 * @apiSuccess {String} empresas.nif NIF de la empresa
 * @apiSuccess {String} empresas.nombre Nombre de la empresa
 * @apiSuccess {String} empresas.notas Notas de la empresa
 * @apiSuccess {String} empresas.enlaceArchivos Enlace a archivos de la empresa
 * @apiSuccess {Date} empresas.createAt Fecha en la que es creada
 * @apiSuccess {Date} empresas.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} empresas.tipoempresaId Id del tipo de la empresa
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "empresas": [
            {
                "id": 1,
                "nif": "34567892K",
                "nombre": "Arturo S.L.",
                "notas": "Nos debe una llamada",
                "enlaceArchivos": "C://mis_datos/arturo.s.l./",
                "createdAt": "2018-03-19T17:43:47.416Z",
                "updatedAt": "2018-03-19T17:43:47.416Z",
                "tipoempresaId": 1
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.getAll);               // R

/**
 * @api {get} /empresa/:empresa_id 3. Listar una empresa.
 * @apiVersion 0.1.0
 * @apiName GetEmpresa
 * @apiGroup Empresa
 * @apiDescription Devuelve la empresa correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} empresa Array con todas las empresas
 * @apiSuccess {Number} empresa.id Id de la empresa
 * @apiSuccess {String} empresa.nif NIF de la empresa
 * @apiSuccess {String} empresa.nombre Nombre de la empresa
 * @apiSuccess {String} empresa.notas Notas de la empresa
 * @apiSuccess {String} empresa.enlaceArchivos Enlace a archivos de la empresa
 * @apiSuccess {Date} empresa.createAt Fecha en la que es creada
 * @apiSuccess {Date} empresa.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} empresa.tipoempresaId Id del tipo de la empresa
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "empresa": {
            "id": 1,
            "nif": "34567892K",
            "nombre": "Arturo S.L.",
            "notas": "Nos debe una llamada",
            "enlaceArchivos": "C://mis_datos/arturo.s.l./",
            "createdAt": "2018-03-19T17:43:47.416Z",
            "updatedAt": "2018-03-19T17:43:47.416Z",
            "tipoempresaId": 1
        },
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la empresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una empresa con id: 2"
    }
 */
router.get('/:empresa_id', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.get);       // R

/**
 * @api {put} /empresa 4. Modifica una empresa.
 * @apiVersion 0.1.0
 * @apiName UpdateEmpresa
 * @apiGroup Empresa
 * @apiDescription Modifica la empresa, la almacena y la devuelve
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiParam {Number} [id] Id de la empresa. No se recomienda introducir.
 * @apiParam {String} [nif] NIF de la empresa
 * @apiParam {String} [nombre] Nombre de la empresa
 * @apiParam {String} [notas] Notas de la empresa
 * @apiParam {String} [enlaceArchivos] Enlace a archivos de la empresa
 * @apiParam {Date} [createAt] Fecha en la que se creó
 * @apiParam {Date} [updateAt] Fecha en la que se modificó
 * @apiParam {Number} [tipoempresaId] Id del tipo de la empresa
 *
 * @apiSuccess {Object[]} empresas Array con todas las empresas
 * @apiSuccess {Number} empresas.id Id de la empresa
 * @apiSuccess {String} empresas.nif NIF de la empresa
 * @apiSuccess {String} empresas.nombre Nombre de la empresa
 * @apiSuccess {String} empresas.notas Notas de la empresa
 * @apiSuccess {String} empresas.enlaceArchivos Enlace a archivos de la empresa
 * @apiSuccess {Date} empresas.createAt Fecha en la que es creada
 * @apiSuccess {Date} empresas.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} empresas.tipoempresaId Id del tipo de la empresa
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "empresas": [
            {
                "id": 1,
                "nif": "34567892K",
                "nombre": "Arturo S.L.",
                "notas": "Nos debe una llamada",
                "enlaceArchivos": "C://mis_datos/arturo.s.l./",
                "createdAt": "2018-03-19T17:43:47.416Z",
                "updatedAt": "2018-03-19T17:43:47.416Z",
                "tipoempresaId": 1
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la empresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una empresa con id: 2"
    }
 */
router.put('/:empresa_id', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.update);    // U

/**
 * @api {delete} /empresa 5. Eliminar una empresa.
 * @apiVersion 0.1.0
 * @apiName RemoveEmpresa
 * @apiGroup Empresa
 * @apiDescription Elimina una empresa de la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {String} mensaje Mensaje que notifica que se ha eliminado
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
        "mensaje": "Empresa eliminada",
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la empresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una empresa con id: 2"
    }
 */
router.delete('/:empresa_id', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.remove); // D

/**
 * @api {get} /empresa/:empresa_id/tienda 6. Listar tiendas de una empresa.
 * @apiVersion 0.1.0
 * @apiName GetTiendasDeEmpresa
 * @apiGroup Empresa
 * @apiDescription Devuelve las tiendas que pertenecen a la empresa correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} tiendas Array con todas las tiendas de la empresa
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
                "provinciaId: 18
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la empresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una empresa con id: 2"
    }
 */
router.get('/:empresa_id/tienda', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.getShop);

/**
 * @api {get} /empresa/:empresa_id/propietario 7. Listar propietarios de una empresa.
 * @apiVersion 0.1.0
 * @apiName GetPropietariosDeEmpresa
 * @apiGroup Empresa
 * @apiDescription Devuelve los propietarios de la empresa correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} propietarios Array con todos los propietarios de la empresa
 * @apiSuccess {Number} propietarios.id Id del propietario
 * @apiSuccess {String} propietarios.nombre Nombre del propietario
 * @apiSuccess {String} propietarios.correo Correo del propietario
 * @apiSuccess {String} propietarios.telefono Telefono del propietario
 * @apiSuccess {Date} propietarios.createAt Fecha en la que es creada
 * @apiSuccess {Date} propietarios.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} propietarios.empresaId Id de la empresa que es propietario
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "propietarios": [
            {
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
 * @apiError (404) Not-found El id de la empresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una empresa con id: 2"
    }
 */
router.get('/:empresa_id/propietario', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.getOwner);

/**
 * @api {get} /empresa/:empresa_id/contrato 8. Listar contratos de una empresa.
 * @apiVersion 0.1.0
 * @apiName GetContratosDeEmpresa
 * @apiGroup Empresa
 * @apiDescription Devuelve los contratos de la empresa correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} contratos Array con todos los propietarios de la empresa
 * @apiSuccess {Number} contratos.id Id del contrato
 * @apiSuccess {String} contratos.fecha_inicio Fecha de inicio del contrato
 * @apiSuccess {String} contratos.fecha_fin Fecha de finalización del contrato
 * @apiSuccess {Boolean} contratos.pagado Indica si el contrato está pagado
 * @apiSuccess {Date} contratos.createAt Fecha en la que es creada
 * @apiSuccess {Date} contratos.updateAt Fecha en la que es modificada
 * @apiSuccess {Number} contratos.empresaId Id de la empresa del contrato
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "contratos": [
            {
                "id": 3,
                "fecha_inicio": "2018-03-21T11:13:22.997Z",
                "fecha_fin": "2019-03-21T11:13:22.997Z",
                "pagado": true,
                "createdAt": "2018-03-21T11:13:22.997Z",
                "updatedAt": "2018-03-21T11:13:22.997Z",
                "empresaId": 1
            }
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la empresa introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una empresa con id: 2"
    }
 */
router.get('/:empresa_id/contrato', passport.authenticate('jwt', {session: false}), auth.can('all company'), empresaController.getContract);

module.exports = router;