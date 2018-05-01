import { Usuario } from '../../../usuario/shared/usuario.model';

export class Sesion {
    public token: string;
    public usuario: Usuario;

    constructor(datas: any) {
        this.token = datas.token;
        this.usuario = datas.usuario;
    }
}
