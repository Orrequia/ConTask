const Contrato = require('../models').Contrato;
const LineaContrato = require('../models').LineaContrato;

//It's Ok
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato;

    [err, contrato] = await to(Contrato.create(req.body));
    if(err)
        return ReE(res, err, 422);

    [err, contrato] = await to(contrato.save());
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{contrato:contrato}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contratos;

    [err, contratos] = await to(Contrato.all());

    if(err)
        return ReE(res, err, 422);


    return ReS(res, {contratos:contratos});
};
module.exports.getAll = getAll;

//It's ok
const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato;
    let contrato_id = req.params.contrato_id;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);

    return ReS(res, {contrato:contrato});
};
module.exports.get = get;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato, datos;

    let contrato_id = req.params.contrato_id;
    datos = req.body;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);

    contrato.set(datos);

    [err, contrato] = await to(contrato.save());
    if(err)
        return ReE(res, err);

    return ReS(res, {contrato:contrato});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato;
    let contrato_id = req.params.contrato_id;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);


    [err, contrato] = await to(contrato.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar el contrato');

    return ReS(res, {mensaje:'Contrato eliminado'});
};
module.exports.remove = remove;

const addLineContract = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, body, contrato, lineaContrato;
    let contrato_id = req.params.contrato_id;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);

    body = req.body;
    body.contratoId = req.params.contrato_id;

    [err, lineaContrato] = await to(LineaContrato.create(body));
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{lineaContrato:lineaContrato}, 201);
};
module.exports.addLineContract = addLineContract;

//It's Ok
const getLineContract = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato, lineaContratos;
    let contrato_id = req.params.contrato_id;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);

    [err, lineaContratos] = await to(contrato.getLineaContrato());
    if(err)
        return ReE(res, err, 422);


    return ReS(res, {lineaContratos:lineaContratos});
};
module.exports.getLineContract = getLineContract;

//It's Ok
const updateLineContract = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato, datos, lineaContrato;
    let contrato_id = req.params.contrato_id;
    let lineacontrato_id = req.params.lineacontrato_id;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);

    datos = req.body;
    datos.contratoId = contrato_id;

    [err, lineaContrato] = await to(contrato.getLineaContrato({where:{id:lineacontrato_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!lineaContrato)
        return ReE(res, "No existe una linea de contrato con id: "+ lineacontrato_id + " para el contrato con id: " + contrato_id);

    lineaContrato[0].set(datos);

    [err, lineaContrato] = await to(lineaContrato[0].save());
    if(err)
        return ReE(res, err);

    return ReS(res, {lineaContrato:lineaContrato});
};
module.exports.updateLineContract = updateLineContract;

//It's Ok
const removeLineContract = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, contrato, lineaContrato;
    let contrato_id = req.params.contrato_id;
    let lineacontrato_id = req.params.lineacontrato_id;

    [err, contrato] = await to(Contrato.findOne({where:{id:contrato_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!contrato)
        return ReE(res, "No existe un contrato con id: "+ contrato_id);


    [err, lineaContrato] = await to(contrato.getLineaContrato({where:{id:lineacontrato_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!lineaContrato[0])
        return ReE(res, "No existe una linea de contrato con id: "+ lineacontrato_id + " para el contrato con id: " + contrato_id);

    [err, lineaContrato] = await to(lineaContrato[0].destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar la linea de contrato');

    return ReS(res, {mensaje:'Linea de contrato eliminada'});
};
module.exports.removeLineContract = removeLineContract;