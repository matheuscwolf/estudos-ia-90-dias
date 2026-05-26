// 🚀 Buscador de CEP Profissional
// Usa: axios, dotenv, ESM, async/await, try/catch

import "dotenv/config";
import axios from "axios";

// 📋 Carrega configurações do .env
const BASE_URL = process.env.VIACEP_BASE_URL;
const NOME_PROJETO = process.env.NOME_DO_PROJETO;
const VERSAO = process.env.VERSAO;

// 🛡️ Validação: se as configs essenciais não existirem, mata o programa
if (!BASE_URL) {
  console.error("❌ Erro: VIACEP_BASE_URL não definida no .env");
  process.exit(1);
}

console.log(`\n🚀 ${NOME_PROJETO} v${VERSAO}\n`);

async function buscarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");
  
  // Validação: CEP precisa ter 8 dígitos
  if (cepLimpo.length !== 8) {
    console.log(`❌ CEP "${cep}" inválido (precisa ter 8 dígitos)\n`);
    return null;
  }
  
  console.log(`🔍 Buscando CEP: ${cepLimpo}...`);
  
  try {
    // Monta URL usando a variável de ambiente!
    const url = `${BASE_URL}/${cepLimpo}/json/`;
    
    const resposta = await axios.get(url, {
      timeout: 5000  // 5 segundos de timeout (configuração profissional)
    });
    
    const dados = resposta.data;
    
    if (dados.erro) {
      throw new Error("CEP não encontrado na base");
    }
    
    console.log("✅ Endereço encontrado:");
    console.log(`   📍 ${dados.logradouro || "(sem logradouro)"}, ${dados.bairro || "(sem bairro)"}`);
    console.log(`   🏙️  ${dados.localidade} - ${dados.uf}`);
    console.log(`   📮 CEP: ${dados.cep}\n`);
    
    return dados;
    
  } catch (erro) {
    if (erro.code === "ECONNABORTED") {
      console.log(`❌ Timeout: servidor demorou demais\n`);
    } else {
      console.log(`❌ Erro: ${erro.message}\n`);
    }
    return null;
  }
}

// 🧪 Testes
await buscarCep("01310-100");   // Avenida Paulista
await buscarCep("20040020");    // Rio Centro
await buscarCep("80060000");    // Curitiba
await buscarCep("123");         // Inválido (curto demais)
await buscarCep("00000000");    // Não existe

console.log("✨ Programa finalizado!\n");