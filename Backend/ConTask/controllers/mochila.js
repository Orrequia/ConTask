const Mochila = require('../models').Mochila;

//It's Ok
const create = async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, mochila;

    [err, mochila] = await to(Mochila.create(req.body));
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{mochila:mochila}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, mochilas;

    [err, mochilas] = await to(Mochila.all());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {mochilas:mochilas});
};
module.exports.getAll = getAll;

//It's ok
const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, mochila;
    let mochila_id = req.params.mochila_id;

    [err, mochila] = await to(Mochila.findOne({where:{id:mochila_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!mochila)
        return ReE(res, "No existe una mochila con id: "+ mochila_id, 404);

    return ReS(res, {mochila:mochila});
};
module.exports.get = get;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, mochila, datos;

    let mochila_id = req.params.mochila_id;
    datos = req.body;

    [err, mochila] = await to(Mochila.findOne({where:{id:mochila_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!mochila)
        return ReE(res, "No existe una mochila con id: "+ mochila_id, 404);

    mochila.set(datos);

    [err, mochila] = await to(mochila.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {mochila:mochila});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, mochila;
    let mochila_id = req.params.mochila_id;

    [err, mochila] = await to(Mochila.findOne({where:{id:mochila_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!mochila)
        return ReE(res, "No existe una mochila con id: "+ mochila_id, 404);


    [err, mochila] = await to(mochila.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar la mochila');

    return ReS(res, {mensaje:'Mochila eliminada'});
};
module.exports.remove = remove;