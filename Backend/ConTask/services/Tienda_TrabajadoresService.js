const Trabajador = require('../models').Trabajador;
const Tienda_Trabajador = require('../models').tienda_trabajador;

const getTrabajadores = async function(jsonTrabajadores, trabajadores){
    let err, traba, responsableTienda;

    //Por cada trabajador
    for(let i = 0 ; i < jsonTrabajadores.length ; i++) {
        let trabajador = jsonTrabajadores[i];

        //Buscamos si ya existe uno igual
        [err, traba] = await to(Trabajador.findOne({where:{nombre:trabajador.nombre,
            correo:trabajador.correo,
            telefono:trabajador.telefono}}));
        if(err)
            return ReE(res, err, 422);

        //Si existe lo guardamos
        if(traba) {
            if(trabajador.responsable === true) {
                responsableTienda = traba.id;
            }

            trabajadores.push(traba);
        }
        //Si no existe lo crearemos.
        else {
            console.log("Hola" + trabajador);
            //Si es dueño de alguna empresa
            if(trabajador.empresaId) {
                [err, empresa] = await to(Empresa.findById(trabajador.empresaId));
                if (err)
                    return ReE(res, err, 422);

                //Comprobamos que exista la empresa y la tienda pertenece a la empresa
                if (empresa && empresa.id !== tienda.empresaId) {
                    return ReE(res, "No existe la empresa o el trabajador tiene asignada una empresa diferente");
                }
            }

            [err, traba] = await to(Trabajador.create({
                nombre: trabajador.nombre,
                correo: trabajador.correo,
                telefono: trabajador.telefono,
                empresaId: trabajador.empresaId
            }));

            if(trabajador.responsable === true)
                responsableTienda = traba.id;

            trabajadores.push(traba);
        }
    }
    return responsableTienda;
};
module.exports.getTrabajadores = getTrabajadores;

const createTiendaTrabajadores = async function(tienda, trabajadores){

    for(let i = 0 ; i < trabajadores.length ; i++) {
        let err, tienTra;
        let tiendaId = tienda.id;
        let trabajadorId = trabajadores[i].id;

        [err, tienTra] = await to(Tienda_Trabajador.create({
            tiendaId: tiendaId,
            trabajadorId: trabajadorId
        }));
        if(err)
            return ReE(res, err, 422);

    }
};
module.exports.createTiendaTrabajadores = createTiendaTrabajadores;