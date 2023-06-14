import { AlteraProdutoDTO } from "./dto/atualizaProduto.dto";
import { listaProdutoDTO } from "./dto/listaProduto.dto";
import { CriaProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
export declare class ProdutoController {
    private clsProdutosArmazenados;
    constructor(clsProdutosArmazenados: ProdutosArmazenados);
    RetornoProduto(): Promise<listaProdutoDTO[]>;
    criaProduto(dadosProduto: CriaProdutoDTO): Promise<any>;
    buscaPorNome(nome: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
    atualizaProduto(id: string, novosDadosProdutos: AlteraProdutoDTO): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
    removeProduto(id: string): Promise<{
        produto: ProdutoEntity;
        message: string;
    }>;
}
