"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const atualizaProduto_dto_1 = require("./dto/atualizaProduto.dto");
const listaProduto_dto_1 = require("./dto/listaProduto.dto");
const produto_dto_1 = require("./dto/produto.dto");
const produto_dm_1 = require("./produto.dm");
const produto_entity_1 = require("./produto.entity");
const uuid_1 = require("uuid");
let ProdutoController = class ProdutoController {
    constructor(clsProdutosArmazenados) {
        this.clsProdutosArmazenados = clsProdutosArmazenados;
    }
    async RetornoProduto() {
        const produtoListados = await this.clsProdutosArmazenados.Produtos;
        const listaRetornoProduto = produtoListados.map(produto => new listaProduto_dto_1.listaProdutoDTO(produto.id, produto.nome));
        return listaRetornoProduto;
    }
    async criaProduto(dadosProduto) {
        var produto = new produto_entity_1.ProdutoEntity((0, uuid_1.v4)(), dadosProduto.nome, dadosProduto.ativo, dadosProduto.valor, dadosProduto.estoque, dadosProduto.medidas, dadosProduto.cor, dadosProduto.marca);
        var retornoProduto;
        this.clsProdutosArmazenados.AdicionarProduto(produto);
        retornoProduto = {
            id: produto.id,
            message: 'Produto Criado'
        };
        return retornoProduto;
    }
    async buscaPorNome(nome) {
        const produtoPornome = await this.clsProdutosArmazenados.buscaPorNome(nome);
        return ({
            produto: produtoPornome,
            message: 'Produto pesquisado por Nome'
        });
    }
    async atualizaProduto(id, novosDadosProdutos) {
        const produtoAtualizado = await this.clsProdutosArmazenados.atualizaProduto(id, novosDadosProdutos);
        return {
            produto: produtoAtualizado,
            message: 'Produto atualizado'
        };
    }
    async removeProduto(id) {
        const produtoRemovido = await this.clsProdutosArmazenados.removeProduto(id);
        return {
            produto: produtoRemovido,
            message: 'Produto removido'
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "RetornoProduto", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_dto_1.CriaProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criaProduto", null);
__decorate([
    (0, common_1.Get)('/:nome'),
    __param(0, (0, common_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "buscaPorNome", null);
__decorate([
    (0, common_1.Put)('/id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualizaProduto_dto_1.AlteraProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "atualizaProduto", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "removeProduto", null);
ProdutoController = __decorate([
    (0, common_1.Controller)('/produtos'),
    __metadata("design:paramtypes", [produto_dm_1.ProdutosArmazenados])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map