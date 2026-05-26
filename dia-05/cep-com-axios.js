// Importa a biblioteca axios
const axios = require("axios");

async function buscarCep(cep) {
  const cepLimpo = cep.replace(/\D/g, "");
  
  console.log(`🔍 Buscando CEP: ${cepLimpo}...`);
  
  try {
    // 🎯 OLHA A SIMPLICIDADE: uma linha só, sem .json()
    const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    
    // axios já entrega o JSON convertido em resposta.data
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

async function rodarTestes() {
  await buscarCep("01310-100");  // Avenida Paulista
  await buscarCep("20040020");   // Rio de Janeiro
  await buscarCep("00000000");   // Inválido
}

rodarTestes();