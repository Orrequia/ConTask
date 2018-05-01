export class Authenticate {
    public alias: string;
    public contrasena: string;

    constructor(object: any) {
        this.alias = (object.alias) ? object.alias : null;
        this.contrasena = (object.contrasena) ? object.contrasena : null;
    }
}
