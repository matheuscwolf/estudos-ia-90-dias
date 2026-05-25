// 🇧🇷 Buscador de CEP usando a API ViaCEP

async function buscarCep(cep) {
  // Remove traço, espaço, qualquer coisa que não seja número
  const cepLimpo = cep.replace(/\D/g, "");
  
  console.log(`🔍 Buscando CEP: ${cepLimpo}...`);
  
  try {
    // 1. Faz a chamada HTTP
    const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    
    // 2. Verifica se o servidor respondeu OK (status 200)
    if (!resposta.ok) {
      throw new Error(`Servidor retornou erro ${resposta.status}`);
    }
    
    // 3. Converte JSON em objeto JavaScript
    const dados = await resposta.json();
    
    // 4. ViaCEP retorna { erro: true } quando CEP não existe
    if (dados.erro) {
      throw new Error("CEP não encontrado!");
    }
    
    // 5. Mostra resultado bonitinho
    console.log("\n✅ Endereço encontrado:");
    console.log(`📍 ${dados.logradouro}, ${dados.bairro}`);
    console.log(`🏙️  ${dados.localidade} - ${dados.uf}`);
    console.log(`📮 CEP: ${dados.cep}\n`);
    
    return dados;
    
  } catch (erro) {
    console.log(`❌ Erro ao buscar CEP: ${erro.message}\n`);
  }
}

// 🧪 Testes
async function rodarTestes() {
  // Teste 1: CEP válido (Avenida Paulista)
  await buscarCep("01310-100");
  
  // Teste 2: CEP válido sem traço
  await buscarCep("20040020");
  
  // Teste 3: CEP que não existe
  await buscarCep("00000000");
}

rodarTestes();