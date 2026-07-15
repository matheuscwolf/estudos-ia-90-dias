import { z } from "zod";

const ClienteSchema = z.object({
  nome: z.string(),
  idade: z.number(),
  email: z.email(),
});

const dadoBom = { nome: "Ana", idade: 34, email: "ana@x.com" };
const dadoRuim = { nome: "Bob", idade: "quarenta", email: "bob" };

const resultado = ClienteSchema.safeParse(dadoRuim);

if (resultado.success === false) {
  console.log("dado inválido, campo: " + String(resultado.error.issues[0].path[0]) + " — " + resultado.error.issues[0].message);
}