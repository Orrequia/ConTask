const express = require('express');
const router = express.Router();

const passport = require('passport');

const provinciaController = require('../controllers/provincia');

const auth = require('../middleware/authorized');
require('../middleware/passport')(passport);

/**
 * @api {get} /provincia 1. Listar provincias.
 * @apiVersion 0.1.0
 * @apiName GetProvincias
 * @apiGroup Provincia
 * @apiDescription Devuelve todas las provincias guardadas en la base de datos.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} provincias Array con las provincias
 * @apiSuccess {Number} provincias.id Id de la provincia
 * @apiSuccess {String} provincias.nombre Nombre de la provincia
 * @apiSuccess {Date} provincias.createAt Fecha en la que es creada
 * @apiSuccess {Date} provincias.updateAt Fecha en la que es modificada
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *      "provincias": [
            {
                "id": 1,
                "nombre": "Álava",
                "createdAt": "2018-03-18T23:00:00.000Z",
                "updatedAt": "2018-03-18T23:00:00.000Z"
            },
            ...
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 */
router.get('/', passport.authenticate('jwt', { session: false}), auth.can('all province'), provinciaController.getAll);

/**
 * @api {get} /tienda/:tienda_id 2. Listar las poblaciones de una provincia
 * @apiVersion 0.1.0
 * @apiName GetPoblacionesDeProvincia
 * @apiGroup Provincia
 * @apiDescription Devuelve las poblaciones de la provincia correspondiente al id como parametro.
 *
 * @apiHeader {String} Authorization Token del usuario
 * @apiHeader {String} [Content-Type=application/json]
 *
 * @apiSuccess {Object[]} poblaciones Array con las poblaciones.
 * @apiSuccess {Number} poblaciones.id Id de la poblacion.
 * @apiSuccess {String} poblaciones.nombre Nombre de la poblacion.
 * @apiSuccess {String} poblaciones.cod_postal Código postal de la poblacion.
 * @apiSuccess {Date} poblaciones.createAt Fecha en la que es creada.
 * @apiSuccess {Date} poblaciones.updateAt Fecha en la que es modificada.
 * @apiSuccess {Number} poblaciones.provinciaId Provincia a la que pertenece.
 * @apiSuccess {Boolean} success Indica si ha ido bien.
 * @apiSuccessExample {json} Respuesta Correcta
 *  {
 *       "poblaciones": [
            {
                "id": 1,
                "nombre": "Alegría-Dulantzi",
                "cod_postal": "1240",
                "createdAt": "2018-03-18T23:00:00.000Z",
                "updatedAt": "2018-03-18T23:00:00.000Z",
                "provinciaId": 1
            },
            ...
        ],
        "success": true
    }
 * @apiError (401) Unauthorized No tienes permisos para acceder a este método.
 * @apiError (404) Not-found El id de la provincia introducido no existe.
 * @apiError (422) Unprocessable-Entity El valor o los valores introducidos no se pueden procesar
 * @apiErrorExample {json} 404 Not found
 *  {
        "success": false,
        "error": "No existe una provincia con id: 30"
    }
 */
router.get('/:provincia_id/poblacion', passport.authenticate('jwt', { session: false}), auth.can('all province'), provinciaController.getProvince);

module.exports = router;