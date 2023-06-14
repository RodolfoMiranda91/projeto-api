import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AlteraProdutoDTO } from "./dto/atualizaProduto.dto";
import { listaProdutoDTO } from "./dto/listaProduto.dto";
import { CriaProdutoDTO } from "./dto/produto.dto";
import { ProdutosArmazenados } from "./produto.dm";
import { ProdutoEntity } from "./produto.entity";
import {v4 as uuid} from 'uuid';



@Controller('/produtos')
export class ProdutoController {
    constructor(private clsProdutosArmazenados: ProdutosArmazenados) {

    }

    @Get()
    async RetornoProduto(){
        const produtoListados = await this.clsProdutosArmazenados.Produtos;
        const listaRetornoProduto = produtoListados.map(
            produto => new listaProdutoDTO(
                produto.id,
                produto.nome
            )
        );

        return listaRetornoProduto;
    }

    @Post()
    async criaProduto(@Body() dadosProduto: CriaProdutoDTO){

        var produto = new ProdutoEntity(uuid(),dadosProduto.nome,dadosProduto.ativo,dadosProduto.valor,dadosProduto.estoque,dadosProduto.medidas,dadosProduto.cor,dadosProduto.marca)

        var retornoProduto;

        this.clsProdutosArmazenados.AdicionarProduto(produto);
        retornoProduto={
            id: produto.id,
            message:'Produto Criado'
        }

        return retornoProduto;
    }

    
    @Get('/:nome')
    async buscaPorNome (@Param('nome') nome:string){
        const produtoPornome = await this.clsProdutosArmazenados.buscaPorNome(nome)
        return({
            produto: produtoPornome,
            message: 'Produto pesquisado por Nome'
        })

    } 
    

    @Put('/id')
    async atualizaProduto(@Param('id') id:string, @Body() novosDadosProdutos: AlteraProdutoDTO){
        const produtoAtualizado = await this.clsProdutosArmazenados.atualizaProduto(id, novosDadosProdutos);
        return{
            produto: produtoAtualizado,
            message: 'Produto atualizado'
        }
    }

    @Delete('/:id')
    async removeProduto(@Param('id') id: string){
        const produtoRemovido = await this.clsProdutosArmazenados.removeProduto(id);
        return{
            produto: produtoRemovido,
            message: 'Produto removido'
        }
    }
}
