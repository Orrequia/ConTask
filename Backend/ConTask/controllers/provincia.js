const Provincia = require('../models').Provincia;
const Poblacion = require('../models').Poblacion;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, provincias;

    [err, provincias] = await to(Provincia.all());

    if(err)
        return ReE(res, err, 422);

    return ReS(res, {provincias:provincias});
};
module.exports.getAll = getAll;

const getProvince = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, provincia, poblaciones;
    let provincia_id = req.params.provincia_id;

    [err, provincia] = await to(Provincia.findOne({where:{id:provincia_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!provincia)
        return ReE(res, "No existe una provincia con id: "+ provincia_id, 404);

    [err, poblaciones] = await to(provincia.getPoblacion());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {poblaciones:poblaciones});
};
module.exports.getProvince = getProvince;