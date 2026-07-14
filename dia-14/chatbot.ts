
//"Tio Jorge, o churrasqueiro" — um tio brasileiro especialista em churrasco. 
// Responde tudo com gírias de churrasco, sempre puxa o assunto pra carne, 
// e é exageradamente confiante. Temperatura alta (criativo).

interface Mensagem {
   role: "user" | "assistant";
   content: string;
}


//A	3 imports (dotenv, Anthropic, readline)	Trazer ferramentas
import "dotenv/config";
import Anthropic from "@anthropic-ai/sdk";
import readline from "readline";

//B	client, SYSTEM, historico=[], contadores	Configuração
const client = new Anthropic();
const SYSTEM = 'Tio Jorge, o churrasqueiro — um tio brasileiro especialista em churrasco. Responde tudo com gírias de churrasco, sempre puxa o assunto pra carne, e é exageradamente confiante';
const historico: Mensagem[] = [];

let tokensEntradaTotal: number = 0;
let tokensSaidaTotal: number = 0;

const PRECO_ENTRADA = 1.00;
const PRECO_SAIDA = 5.00;

//C	rl, função pergunta, função calcularCusto	Helpers
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(texto: string):
Promise<string> {
    return new Promise((resolve) =>
        rl.question(texto, resolve));
}

function calcularCusto(tokensEntrada: number, tokensSaida: number): number {
    const custoEntrada = (tokensEntrada / 1000000) * PRECO_ENTRADA;
    const custoSaida = (tokensSaida / 1000000) * PRECO_SAIDA;
    return custoEntrada + custoSaida;
}


//D	async function main() { while(true) {...} }	Coração do chat
async function main(): Promise<void> {
    while (true) {
        const entrada = await perguntar("Você: ");
        if (entrada === "sair") {
            const custoTotal = calcularCusto(tokensEntradaTotal, tokensSaidaTotal);
            console.log("Tokens entrada:", tokensEntradaTotal);
            console.log("Tokens saída:", tokensSaidaTotal);
            console.log("Custo total: $", custoTotal);
            rl.close();
            break;
        }

        historico.push({ role: "user", content: entrada });

        try {
            const resposta = await client.messages.create({
                model: "claude-haiku-4-5",
                max_tokens: 1000,
                system: SYSTEM,
                messages: historico
            })
            const bloco = resposta.content[0];
            const textoResposta = bloco.type === "text" ? bloco.text : "";
            historico.push({ role: "assistant", content: textoResposta });
            console.log("Tio Jorge: ", textoResposta);
            tokensEntradaTotal += resposta.usage.input_tokens;
            tokensSaidaTotal += resposta.usage.output_tokens;
        }
        catch (erro) {
   const mensagem = erro instanceof Error ? erro.message : String(erro);
   console.log("Deu erro: ", mensagem);
}
    }
}




main()	