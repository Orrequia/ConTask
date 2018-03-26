const Tienda = require('../models').Tienda;
const Tienda_Trabajador = require('../models').tienda_trabajador;

//It's Ok
const create = async function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    let err, tienda, tiendaTrabajador;

    //Creamos la tienda
    [err, tienda] = await to(Tienda.create({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        correo: req.body.correo,
        empresaId: req.body.empresaId,
        provinciaId: req.body.provinciaId,
        responsableId: req.body.responsableId
    }));
    if(err)
        return ReE(res, err, 422);

    //Añadimos al responsable en la lista de trabajadores de la tienda.
    [err, tiendaTrabajador] = await to(Tienda_Trabajador.create({
        trabajadorId: req.body.responsableId,
        tiendaId: tienda.id
    }));
    if(err)
        return ReE(res, err, 422);

    //Creamos entradas de la tabla intermedia
    //tiendaTrabajadoresService.createTiendaTrabajadores(tienda, trabajadores);
    //let trabajadores_json = trabajadorService.toWebs(trabajadores);
    return ReS(res,{tienda:tienda}, 201);
};
module.exports.create = create;

//It's Ok
const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tiendas;

    [err, tiendas] = await to(Tienda.all());

    if(err)
        return ReE(res, err, 422);

    return ReS(res, {tiendas:tiendas});
};
module.exports.getAll = getAll;

//It's ok
const get = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda;
    let tienda_id = req.params.tienda_id;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);

    return ReS(res, {tienda:tienda});
};
module.exports.get = get;

//It's Ok
const update = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda, datos;

    let tienda_id = req.params.tienda_id;
    datos = req.body;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);

    tienda.set(datos);

    [err, tienda] = await to(tienda.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {tienda:tienda});
};
module.exports.update = update;

//It's Ok
const remove = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda;
    let tienda_id = req.params.tienda_id;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);


    [err, tienda] = await to(tienda.destroy());
    if(err)
        return ReE(res, 'Ha ocurrido un error al intentar eliminar la tienda');

    return ReS(res, {mensaje:'Tienda eliminada'});
};
module.exports.remove = remove;

const getEmployee = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda, trabajadores;
    let tienda_id = req.params.tienda_id;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);

    [err, trabajadores] = await to(tienda.getTrabajador());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {trabajadores:trabajadores});
};

module.exports.getEmployee = getEmployee;

const addEmployee = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda, trabajador;
    let tienda_id = req.params.tienda_id;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);


    [err, trabajador] = await to(tienda.addTrabajador(req.body.trabajadorId));
    if(err)
        return ReE(res, "No existe un trabajador con id: " + req.body.trabajadorId, 422);

    return ReS(res, {trabajador:trabajador});
};
module.exports.addEmployee = addEmployee;

const removeEmployee = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda;
    let tienda_id = req.params.tienda_id;
    let trabajador_id = req.params.trabajador_id;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);

    [err, trabajador] = await to(tienda.getTrabajador({where: {id: trabajador_id}}));
    if(err)
        return ReE(res, err, 422);

    if(!trabajador)
        return ReE(res, "No existe un trabajador con id: "+ trabajador_id, 404);

    [err, tienda] = await to(tienda.removeTrabajador(trabajador[0].id));
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {mensaje:"Trabajador eliminado de la tienda"});
};

module.exports.removeEmployee = removeEmployee;

const getPenPack = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tienda, mochilas;
    let tienda_id = req.params.tienda_id;

    [err, tienda] = await to(Tienda.findOne({where:{id:tienda_id}}));

    if(err)
        return ReE(res, err, 422);

    if(!tienda)
        return ReE(res, "No existe una tienda con id: "+ tienda_id, 404);

    [err, mochilas] = await to(tienda.getMochila());
    if(err)
        return ReE(res, err, 422);

    return ReS(res, {mochilas:mochilas});
};
module.exports.getPenPack = getPenPack;