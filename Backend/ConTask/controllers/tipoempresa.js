const TipoEmpresa = require('../models').TipoEmpresa;

//It's Ok
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipoempresa;

    [err, tipoempresa] = await to(TipoEmpresa.create(req.body));
    if(err)
        return ReE(res, err, 422);

    [err, tipoempresa] = await to(tipoempresa.save());
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{tipoempresa:tipoempresa}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipoempresas;

    [err, tipoempresas] = await to(TipoEmpresa.all());

    if(err)
        return ReE(res, err, 422);


    return ReS(res, {tipoempresas:tipoempresas});
};
module.exports.getAll = getAll;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipoempresa, datos;

    let tipoempresa_id = req.params.tipoempresa_id;
    datos = req.body;

    [err, tipoempresa] = await to(TipoEmpresa.findOne({where:{id:tipoempresa_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!tipoempresa)
        return ReE(res, "No existe un tipoempresa con id: "+ tipoempresa_id);

    tipoempresa.set(datos);

    [err, tipoempresa] = await to(tipoempresa.save());
    if(err)
        return ReE(res, err);

    return ReS(res, {tipoempresa:tipoempresa});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipoempresa;
    let tipoempresa_id = req.params.tipoempresa_id;

    [err, tipoempresa] = await to(TipoEmpresa.findOne({where:{id:tipoempresa_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tipoempresa)
        return ReE(res, "No existe un tipoempresa con id: "+ tipoempresa_id);


    [err, tipoempresa] = await to(tipoempresa.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar al tipoempresa');

    return ReS(res, {mensaje:'TipoEmpresa eliminado'});
};
module.exports.remove = remove;