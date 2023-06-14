import { ProdutoEntity } from "./produto.entity";
export declare class ProdutosArmazenados {
    #private;
    AdicionarProduto(produto: ProdutoEntity): void;
    get Produtos(): ProdutoEntity[];
    private buscaID;
    buscaPorNome(nome: string): Promise<ProdutoEntity>;
    atualizaProduto(id: string, dadosAtualizacaoProduto: Partial<ProdutoEntity>): Promise<ProdutoEntity>;
    removeProduto(id: string): Promise<ProdutoEntity>;
}
