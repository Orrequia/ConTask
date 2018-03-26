const TipoMochila = require('../models').TipoMochila;

//It's Ok
const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipomochila;

    [err, tipomochila] = await to(TipoMochila.create(req.body));
    if(err)
        return ReE(res, err, 422);

    [err, tipomochila] = await to(tipomochila.save());
    if(err)
        return ReE(res, err, 422);

    return ReS(res,{tipomochila:tipomochila}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipomochilas;

    [err, tipomochilas] = await to(TipoMochila.all());

    if(err)
        return ReE(res, err, 422);


    return ReS(res, {tipomochilas:tipomochilas});
};
module.exports.getAll = getAll;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipomochila, datos;

    let tipomochila_id = req.params.tipomochila_id;
    datos = req.body;

    [err, tipomochila] = await to(TipoMochila.findOne({where:{id:tipomochila_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!tipomochila)
        return ReE(res, "No existe un tipomochila con id: "+ tipomochila_id);

    tipomochila.set(datos);

    [err, tipomochila] = await to(tipomochila.save());
    if(err)
        return ReE(res, err);

    return ReS(res, {tipomochila:tipomochila});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tipomochila;
    let tipomochila_id = req.params.tipomochila_id;

    [err, tipomochila] = await to(TipoMochila.findOne({where:{id:tipomochila_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tipomochila)
        return ReE(res, "No existe un tipomochila con id: "+ tipomochila_id);


    [err, tipomochila] = await to(tipomochila.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar al tipomochila');

    return ReS(res, {mensaje:'TipoMochila eliminado'});
};
module.exports.remove = remove;