import "dotenv/config";

// Agora process.env tem as variáveis do .env!
console.log("🔐 Variáveis de ambiente carregadas:");
console.log("Chave secreta:", process.env.MINHA_CHAVE_SECRETA);
console.log("Projeto:", process.env.NOME_DO_PROJETO);
console.log("API URL:", process.env.API_URL);
