export interface PessoaFisicaDTO {
  nome: string;
  CPF: string;
  data: string;
  rg: string;
  orgaoExpedidor: string;
  genero: "masculino" | "feminino" | "outro" | "prefiro não informar";
  nacionalidade: string;
  naturalidade: string;
}