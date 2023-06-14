import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutosArmazenados{
    #produtos: ProdutoEntity[] = [];

    AdicionarProduto(produto: ProdutoEntity){
        this.#produtos.push(produto);
    }

    get Produtos(){
        return this.#produtos;
    }

    private buscaID(id: string){
        const possivelProduto = this.#produtos.find(
            produtoSalvo => produtoSalvo.id === id
        );

        if(!possivelProduto){
            throw new Error('Produto não encontrado');
        }

        return possivelProduto
    }

    async buscaPorNome(nome: string){
        const possivelProduto = this.#produtos.find(
            produtoSalvo => produtoSalvo.nome === nome
        );

        if(!possivelProduto){
            throw new Error('Produto não encontrado');
        }

        return possivelProduto
    }

   

    async atualizaProduto(id: string, dadosAtualizacaoProduto: Partial<ProdutoEntity>){
        const produto = this.buscaID(id);

        Object.entries(dadosAtualizacaoProduto).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return;
                }

                produto[chave] = valor;
            }
        )

        return produto;
    }
    
    async removeProduto(id: string){
        const produto = this.buscaID(id);
        this.#produtos = this.#produtos.filter(
            produtoSalvo => produtoSalvo.id !== id
        )
        return produto;
    }
}