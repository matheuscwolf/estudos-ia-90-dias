# 📖 APRENDIZADOS — Diário do curso

> Reflexões pessoais, insights, conexões.  
> NÃO é cola. Pra consulta rápida, ver `cola.md`.  
> Material antigo cronológico em `anotacoes-antigo.md`.

---

## 🎯 META DO CURSO

Entregar **proposta comercial de IA pra empresário** no Dia 90.

---

## 📅 DIA 7 — Primeira chamada à API

### 🎉 Marcos
- Claude respondeu no meu terminal pela primeira vez
- Saí de "consumidor de IA" pra "construtor com IA"

### 💡 Insights
- Sonnet custou ~13x mais que Haiku na mesma pergunta → **escolha de modelo é decisão de margem**
- Existem 3 "Claudes" diferentes — cada um pra um caso
- API ≠ claude.ai (são produtos diferentes)

### 🔥 Crise da chave exposta
- Quase vazei minha chave num print (escondi com janela por cima — não esconde)
- Revoguei e criei nova em 2min
- Lição: **FECHA aba do .env antes de print**

### 🤔 Perguntas que ficaram
- Como otimizar custo quando histórico cresce?
- Vou descobrir no Dia 27 (otimização) e Dia 43 (caching)

---

## 📅 DIA 8 — System prompts + chatbot

### 🎉 Marcos
- Construí "Tio professor de violão" funcional
- Ensinou Wonderwall com acordes reais (Em7, Gsus2, Dsus2)
- Memória manual funcionando

### 💡 Insights
- System prompt NÃO é lei — é tendência
- Pra compliance real: combinar system + validação + tool use
- Temperatura 0 é o padrão profissional — sobe só quando criatividade tem valor
- "Mandar tudo pro Claude" é caro E piora qualidade — curar contexto vence

### 🔥 Travas que tive
- Misturei conceitos do chatbot.js no exercício 1 (copiei estrutura sem precisar)
- Travei várias vezes no exercício 3 (esqueci `main();`, esqueci import readline, typo `r1` vs `rl`)
- Setas `←` em comentário = "Invalid character" (não tinha `//` antes)

### 🤔 Perguntas que ficaram
- Como GARANTIR fluxo controlado quando user tenta burlar? → Tool use (Dia 37+)

---

## 📅 DIA 9 — Reorganização + Fixação massiva

### 🎯 Decisão estratégica
- Anotacoes.md tava com 1048 linhas → impossível consultar
- Reorganizei em DOIS arquivos:
  - `cola.md` = consulta rápida (tabelas, código pronto)
  - `aprendizados.md` = reflexões e jornada (este aqui)
- Antigo virou `anotacoes-antigo.md` (matéria-prima, não apaguei)

### 💡 Insight sobre meu aprendizado
- Tabela com 3 colunas (Posição | O quê | Por quê) funciona MUITO melhor pro meu cérebro
- Eu sei CONCEITO de IA, mas a estrutura de código JS ainda não cristalizou na mão
- Decidi por sessão de fixação MASSIVA (4 chatbots seguidos)

### 🤔 Reflexão pessoal
- Aprendi que "não decorar sintaxe" é normal, mas "não saber o que VAI lá" é problema
- Vou conseguir codar com cola sempre — meta é digitar estrutura sem consultar em 7 dias

---