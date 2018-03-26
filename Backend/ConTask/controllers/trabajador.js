const Trabajador = require('../models').Trabajador;

//It's Ok
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, trabajador;

    [err, trabajador] = await to(Trabajador.create(req.body));
    if(err)
        return ReE(res, err, 422);

    [err, trabajador] = await to(trabajador.save());
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{trabajador:trabajador}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, trabajadores;

    [err, trabajadores] = await to(Trabajador.all());

    if(err)
        return ReE(res, err, 422);


    return ReS(res, {trabajadores:trabajadores});
};
module.exports.getAll = getAll;

//It's ok
const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, trabajador;
    let trabajador_id = req.params.trabajador_id;

    [err, trabajador] = await to(Trabajador.findOne({where:{id:trabajador_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!trabajador)
        return ReE(res, "No existe un trabajador con id: "+ trabajador_id);

    return ReS(res, {trabajador:trabajador});
};
module.exports.get = get;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, trabajador, datos;

    let trabajador_id = req.params.trabajador_id;
    datos = req.body;

    [err, trabajador] = await to(Trabajador.findOne({where:{id:trabajador_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!trabajador)
        return ReE(res, "No existe un trabajador con id: "+ trabajador_id);

    trabajador.set(datos);

    [err, trabajador] = await to(trabajador.save());
    if(err)
        return ReE(res, err);

    return ReS(res, {trabajador:trabajador});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, trabajador;
    let trabajador_id = req.params.trabajador_id;

    [err, trabajador] = await to(Trabajador.findOne({where:{id:trabajador_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!trabajador)
        return ReE(res, "No existe un trabajador con id: "+ trabajador_id);


    [err, trabajador] = await to(trabajador.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar al trabajador');

    return ReS(res, {mensaje:'Trabajador eliminado'});
};
module.exports.remove = remove;