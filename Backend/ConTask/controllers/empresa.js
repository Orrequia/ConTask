/*var passport = require('passport');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var Empresa = require("../oldModels/empresa");
var Auth = require("./auth");
var getToken = Auth.getToken;

exports.readAll = function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        Empresa.find(function (err, companies) {
            if (err)
                return next(err);
            res.json(companies);
        });
    }
    else {
        return res.status(403).send({success: false, msg: 'No tienes autorizacion.'})
    }
};

//GET - Return a register with specified ID
exports.read = function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        Empresa.findById(req.params.id, function (err, company) {
            if (err)
                return res.send(500, err.company);
            res.json(company);
        });
    }
    else {
        return res.status(403).send({success: false, msg: 'No tienes autorizacion.'})
    }
};

//POST - Insert a new register
exports.create = function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        var newCompany = new Empresa({
            nif: req.body.nif,
            nombre: req.body.nombre,
            notas: req.body.notas,
            enlaceArchivos: req.body.enlaceArchivos,
            esAutonomo: req.body.esAutonomo,
            contrato: req.body.contrato,
            listaTienda: req.body.listaTienda
        });

        newCompany.save(function(err) {
            if(err) {
                return res.json({success: false, msg: 'Fallo al crear la empresa.'})
            }
            res.json({id: newCompany.id, success: true, msg: 'Creada la empresa con exito.'})
        });
    }
    else {
        return res.status(403).send({success: false, msg: 'No tienes autorizacion'});
    }
};

//PUT - Update a register already exists
exports.update = function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        Empresa.findById(req.params.id, function (err, company) {
            if (err)
                res.status(500).send({message: "No se encuentra una empresa con id " + req.params.id});

            company.nif = req.body.nif;
            company.nombre = req.body.nombre;
            company.nota = req.body.nota;
            company.enlaceArchivos = req.body.enlaceArchivos;
            company.esAutonomo = req.body.esAutonomo;
            company.contrato = req.body.contrato;
            comapny.listaTienda = req.body.listaTienda;

            company.save(function(err) {
                if(err)
                    return res.send(err.company);
                res.json(company);
            })
        });
    }
    else {
        return res.status(403).send({success: false, msg: 'No tienes autorizacion.'})
    }
};

//DELETE - Delete a register with specified ID
exports.delete = function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        Empresa.findByIdAndRemove(req.params.id, function(err) {
            if (err)
                return res.send(500, err.company);
            res.json({ message: 'Eliminado correctamente.' });
        });
    }
    else {
        return res.status(403).send({success: false, msg: 'No tienes autorizacion.'})
    }
};

//SEARCH - Delete a register with specified ID
exports.search = function(req, res) {
    var token = getToken(req.headers);
    if(token) {
        console.log("Buscar");
    }
    else {
        return res.status(403).send({success: false, msg: 'No tienes autorizacion.'})
    }
};*/
const Empresa = require('../models').Empresa;

//It's Ok
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa;

    [err, empresa] = await to(Empresa.create(req.body));
    if(err)
        return ReE(res, err, 422);

    [err, empresa] = await to(empresa.save());
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{empresa:empresa}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresas;

    [err, empresas] = await to(Empresa.all());

    return ReS(res, {empresas:empresas});
};
module.exports.getAll = getAll;

//It's ok
const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa;
    let empresa_id = req.params.empresa_id;

    [err, empresa] = await to(Empresa.findOne({where:{id:empresa_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!empresa)
        return ReE(res, "No existe una empresa con id: "+ empresa_id, 404);

    return ReS(res, {empresa:empresa});
};
module.exports.get = get;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa, datos;

    let empresa_id = req.params.empresa_id;
    datos = req.body;

    [err, empresa] = await to(Empresa.findOne({where:{id:empresa_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!empresa)
        return ReE(res, "No existe una empresa con id: "+ empresa_id, 404);

    empresa.set(datos);

    [err, empresa] = await to(empresa.save());
    if(err){
        return ReE(res, err, 422);
    }
    return ReS(res, {empresa:empresa});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa;
    let empresa_id = req.params.empresa_id;

    [err, empresa] = await to(Empresa.findOne({where:{id:empresa_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!empresa)
        return ReE(res, "No existe una empresa con id: "+ empresa_id, 404);


    [err, empresa] = await to(empresa.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar la empresa');

    return ReS(res, {mensaje:'Empresa eliminada'});
};
module.exports.remove = remove;

const getShop = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa, tiendas;
    let empresa_id = req.params.empresa_id;

    [err, empresa] = await to(Empresa.findOne({where:{id:empresa_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!empresa)
        return ReE(res, "No existe una empresa con id: "+ empresa_id, 404);

    [err, tiendas] = await to(empresa.getTiendas());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {tiendas:tiendas});
};
module.exports.getShop = getShop;

const getOwner = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa, propietarios;
    let empresa_id = req.params.empresa_id;

    [err, empresa] = await to(Empresa.findOne({where:{id:empresa_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!empresa)
        return ReE(res, "No existe una empresa con id: "+ empresa_id, 404);

    [err, propietarios] = await to(empresa.getPropietarios());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {propietarios:propietarios});
};
module.exports.getOwner = getOwner;

const getContract = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, empresa, contratos;
    let empresa_id = req.params.empresa_id;

    [err, empresa] = await to(Empresa.findOne({where:{id:empresa_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!empresa)
        return ReE(res, "No existe una empresa con id: "+ empresa_id, 404);

    [err, contratos] = await to(empresa.getContratos());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {contratos:contratos});
};
module.exports.getContract = getContract;
