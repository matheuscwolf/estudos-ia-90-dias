import { z } from "zod";

// Schema = as regras de negócio da transação
const TransacaoSchema = z.object({
  descricao: z.string().min(3),        // string com no mínimo 3 caracteres
  valor: z.number().positive(),        // número > 0
  categoria: z.string().optional(),    // pode não existir
  moeda: z.string().default("BRL"),    // se não vier, vira "BRL"
});

// Tipo TS extraído do schema — uma fonte de verdade só
type Transacao = z.infer<typeof TransacaoSchema>;

// Dados de teste — repara que nenhum tem "moeda"
const transacaoBoa = { descricao: "Mercado", valor: 250.5 };
const transacaoRuim = { descricao: "TV", valor: -50 };

const r1 = TransacaoSchema.safeParse(transacaoBoa);
const r2 = TransacaoSchema.safeParse(transacaoRuim);

if (r1.success === true) {
  console.log(r1.data); // o dado VALIDADO e TRANSFORMADO
}

if (r2.success === false) {
  for (const issue of r2.error.issues) {
    console.log("dado inválido, campo: " + String(issue.path[0]) + " — " + issue.message);
  }
}