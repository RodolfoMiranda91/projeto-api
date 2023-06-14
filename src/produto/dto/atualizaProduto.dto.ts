import { IsArray, IsBoolean, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AlteraProdutoDTO{

    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    @IsOptional()
    nome: string;

    @IsBoolean({message: "Status inválido"})  
    @IsOptional() 
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

    @IsString({message: "Marca inválido"})
    @IsOptional()
    marca: string;
}