const TipoContrato = require('../models').TipoContrato;

//It's Ok
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipocontrato;

    [err, tipocontrato] = await to(TipoContrato.create(req.body));
    if(err)
        return ReE(res, err, 422);

    [err, tipocontrato] = await to(tipocontrato.save());
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{tipocontrato:tipocontrato}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipocontratos;

    [err, tipocontratos] = await to(TipoContrato.all());

    if(err)
        return ReE(res, err, 422);


    return ReS(res, {tipocontratos:tipocontratos});
};
module.exports.getAll = getAll;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipocontrato, datos;

    let tipocontrato_id = req.params.tipocontrato_id;
    datos = req.body;

    [err, tipocontrato] = await to(TipoContrato.findOne({where:{id:tipocontrato_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!tipocontrato)
        return ReE(res, "No existe un tipocontrato con id: "+ tipocontrato_id);

    tipocontrato.set(datos);

    [err, tipocontrato] = await to(tipocontrato.save());
    if(err)
        return ReE(res, err);

    return ReS(res, {tipocontrato:tipocontrato});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipocontrato;
    let tipocontrato_id = req.params.tipocontrato_id;

    [err, tipocontrato] = await to(TipoContrato.findOne({where:{id:tipocontrato_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tipocontrato)
        return ReE(res, "No existe un tipocontrato con id: "+ tipocontrato_id);


    [err, tipocontrato] = await to(tipocontrato.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar al tipocontrato');

    return ReS(res, {mensaje:'TipoContrato eliminado'});
};
module.exports.remove = remove;