
const toWebs = async function(trabajadores){
    let trabajadores_json = [];

    for(let i = 0 ; i < trabajadores.length ; i++) {

        let trabajador_info = trabajadores[i].toWeb();
        trabajadores_json.push(trabajador_info);
    }

    return trabajadores_json;
};
module.exports.toWebs = toWebs;