import { CriaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
export declare class UsuarioController {
    private clsUsuariosArmazenados;
    constructor(clsUsuariosArmazenados: UsuariosArmazenados);
    RetornoUsuarios(): Promise<listaUsuarioDTO[]>;
    criaUsuario(dadosUsuario: CriaUsuarioDTO): Promise<any>;
    atualizaUsuario(id: string, novosDados: AlteraUsuarioDTO): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: UsuarioEntity;
        message: string;
    }>;
}
