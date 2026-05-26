// ✨ Sintaxe moderna ESM
import axios from "axios";

async function buscarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");
  
  console.log(`🔍 Buscando CEP: ${cepLimpo}...`);
  
  try {
    const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    const dados = resposta.data;
    
    if (dados.erro) {
      throw new Error("CEP não encontrado!");
    }
    
    console.log("\n✅ Endereço encontrado:");
    console.log(`📍 ${dados.logradouro}, ${dados.bairro}`);
    console.log(`🏙️  ${dados.localidade} - ${dados.uf}`);
    console.log(`📮 CEP: ${dados.cep}\n`);
    
    return dados;
    
  } catch (erro) {
    console.log(`❌ Erro: ${erro.message}\n`);
  }
}

await buscarCep("01310-100");
await buscarCep("20040020");