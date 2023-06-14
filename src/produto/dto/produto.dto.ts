import { IsArray, IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CriaProdutoDTO{

    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsBoolean({message: "Status inválido"})   
    ativo: boolean;

    @IsNumber()
    @IsOptional()
    valor: number;

    @IsNumber()
    @IsOptional()
    estoque: number;
    
    @IsArray({message: "Medida não pode ser vazio"})
    medidas: string[] = [];
    
    @IsArray({message: "Cor não pode ser vazio"})
    cor: string[] = [];

    @IsString()
    @IsNotEmpty({message: "Marca não pode ser vazio"})
    marca: string;
}