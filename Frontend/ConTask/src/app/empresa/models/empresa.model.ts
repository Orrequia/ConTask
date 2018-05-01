import { TipoEmpresa } from './tipoEmpresa.model';

export interface Empresa {
    id?: number;
    tipoempresaId: TipoEmpresa;
    nif: string;
    nombre: string;
    enlaceArchivos: string;
    createdAt: Date;
    updatedAt: Date;
}
