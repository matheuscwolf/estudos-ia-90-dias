# 📅 PLANO OFICIAL — Curso de IA 90 dias

> Este é o roteiro mestre. Seguir ESTRITAMENTE.
> Status atual: ~Dia 16 concluído (SDK Claude, chatbot multi-turn). Próximo: Dia 17 (Streaming).
>
> BURACOS a tapar (intercalar): Zod (d6) · Git avançado (d8) · ler Building Effective Agents (d13) · prompt engineering (d12).

---

## MÊS 1 — Fundação técnica

### Semana 1 — JavaScript/TypeScript moderno
- Dia 1: Setup — Node.js 20+, VS Code, GitHub, terminal. Hello world. Variáveis, tipos. ✅
- Dia 2: Funções, arrow functions, destructuring, spread. ✅
- Dia 3: Arrays e métodos funcionais (map, filter, reduce, find). ✅
- Dia 4: Async/await, Promises, fetch. ✅
- Dia 5: Módulos (import/export), npm, package.json. ✅
- Dia 6: TypeScript — tipos, interfaces, generics básicos, Zod. ⚠️ (TS ok, ZOD pendente)
- Dia 7: Projeto: CLI que recebe cidade e imprime clima (API pública). ⚠️ (fez ViaCEP)

### Semana 2 — Git, terminal, e fundamentos de IA
- Dia 8: Git de verdade — branch, merge, rebase, conflict. GitHub flow. ⚠️ (básico só)
- Dia 9: Terminal/bash — navegação, grep, pipes, env vars. ⚠️
- Dia 10: O que é LLM. Tokens, context window, temperatura, top_p. Ver "Intro to LLMs" do Karpathy. ✅
- Dia 11: Tipos de aplicação de IA: chatbot, RAG, agente, workflow. ✅
- Dia 12: Prompt engineering — system vs user, few-shot, chain of thought, XML tags. ⚠️
- Dia 13: Ler "Building Effective Agents". Volta muitas vezes. ❌
- Dia 14: Projeto: markdown com 10 prompts + análise. ❌

### Semana 3 — Claude API a fundo
- Dia 15: Conta no console.anthropic.com, crédito, primeira chamada via curl. ✅
- Dia 16: SDK Node (@anthropic-ai/sdk) — chamada simples, system prompt, multi-turn. ✅
- Dia 17: Streaming. Mostrar resposta progressiva. ⬅️ PRÓXIMO
- Dia 18: Tool use (function calling) — Claude decide chamar função, você executa, devolve.
- Dia 19: Structured output com JSON + validação Zod.
- Dia 20: Prompt caching, batch API, escolha de modelo (Haiku/Sonnet/Opus).
- Dia 21: Projeto: CLI "pergunte qualquer coisa" com 3 tools (calculadora, busca fake, leitura de arquivo).

### Semana 4 — Python
- Dia 22: Python básico — tipos, listas, dicts, controle de fluxo. Diferenças vs JS.
- Dia 23: Funções, classes, módulos, virtualenv/uv.
- Dia 24: SDK Python do Claude. Refaz exercícios da semana 3 em Python.
- Dia 25: Arquivos, JSON, CSV. Pandas básico.
- Dia 26: Requests, scraping leve com BeautifulSoup.
- Dia 27: FastAPI — API em 30 linhas.
- Dia 28: Projeto: API FastAPI que recebe pergunta, chama Claude, devolve com tools.

---

## MÊS 2 — Construir aplicações de IA

### Semana 5 — Next.js 15 + React
- Dia 29: React essencial — componente, props, useState, useEffect.
- Dia 30: Listas, formulários, eventos. Pensar em componentes.
- Dia 31: Cria projeto Next.js 15 — estrutura, App Router.
- Dia 32: Server Components vs Client Components.
- Dia 33: Routing, layouts, loading.tsx, error.tsx.
- Dia 34: Server Actions, API routes, env vars.
- Dia 35: Projeto: página Next.js que chama Claude via Server Action.

### Semana 6 — UI bonita rápido (Tailwind + shadcn)
- Dia 36: Tailwind CSS — utilitários, responsive, hover/focus.
- Dia 37: shadcn/ui — Card, Button, Input, Dialog.
- Dia 38: Layouts — dashboard com sidebar, app de chat, landing page.
- Dia 39: Vercel AI SDK — useChat, streaming na UI.
- Dia 40: Renderização de markdown, syntax highlighting.
- Dia 41: Animações com Framer Motion. Loading/empty states.
- Dia 42: Projeto: chat com Claude bonito, streaming, deploy na Vercel.

### Semana 7 — Banco de dados + auth (Supabase)
- Dia 43: Postgres básico — tabelas, colunas, tipos, relacionamentos.
- Dia 44: SQL — SELECT, INSERT, UPDATE, JOIN, GROUP BY.
- Dia 45: Cria projeto Supabase. Cliente JS no Next.js.
- Dia 46: Row Level Security (RLS) — fundamental.
- Dia 47: Auth — email/senha, magic link, OAuth (Google).
- Dia 48: Sessão no Next.js — middleware, server-side, client-side.
- Dia 49: Projeto: clone simples do ChatGPT — login, histórico persistido, cada user vê só o seu.

### Semana 8 — RAG
- Dia 50: Conceito de RAG — por que existe, quando usar.
- Dia 51: Embeddings — o que são, como funcionam (Voyage AI ou OpenAI).
- Dia 52: Vector database — pgvector no Supabase.
- Dia 53: Chunking — quebrar documento longo em pedaços.
- Dia 54: Pipeline — upload PDF, extrai texto, gera embeddings, salva.
- Dia 55: Retrieval — pergunta vira embedding, busca top-k, monta prompt.
- Dia 56: Avaliação — como saber se o RAG tá bom.
- Dia 57: Projeto: "Chat com seus PDFs" citando trechos.

---

## MÊS 3 — Agentes, orquestração, e ir além

### Semana 9 — Agentes de verdade
- Dia 58: Releia Building Effective Agents. Padrões: prompt chaining, routing, parallelization, orchestrator-workers, evaluator-optimizer.
- Dia 59: Implementa prompt chaining (extrai → analisa → resume).
- Dia 60: Implementa routing — classifica input, manda pro especialista.
- Dia 61: Implementa parallelization — N agentes em paralelo, agrega.
- Dia 62: Implementa orchestrator-workers — agente principal decide subtarefas.
- Dia 63: Loop agêntico — agente chama tools até resolver. Limites e guards.
- Dia 64: Projeto: agente de pesquisa — busca web, lê fontes, escreve relatório com citações.

### Semana 10 — MCP (Model Context Protocol)
- Dia 65: Doc oficial modelcontextprotocol.io. Arquitetura: server, client, transport.
- Dia 66: Roda MCP server pronto (filesystem, github) no Claude Desktop.
- Dia 67: Constrói teu primeiro MCP server — tools em TypeScript.
- Dia 68: MCP server com resources e prompts.
- Dia 69: Integra MCP no teu app via SDK.
- Dia 70: Avalia MCPs prontos — quais usar, quais reconstruir.
- Dia 71: Projeto: MCP server que expõe operações no Supabase + agente que usa.

### Semana 11 — Produção
- Dia 72: Observabilidade — logs, tracing, custo por usuário (Helicone/Langfuse).
- Dia 73: Evals — conjunto de teste, medir qualidade, regression test.
- Dia 74: Custo e latência — caching, escolha de modelo, paralelização, streaming.
- Dia 75: Segurança — secrets, RLS, rate limiting, prompt injection.
- Dia 76: Deploy sério — Vercel, Railway/Fly.io, cron jobs.
- Dia 77: Pagamentos — Stripe (assinatura, webhook).
- Dia 78: Projeto: bota um projeto anterior em produção real — domínio, login, pagamento, analytics.

### Semana 12 — Repertório + projeto final
- Dia 79: Padrão "AI form filler".
- Dia 80: Padrão "AI workflow".
- Dia 81: Padrão "AI co-pilot".
- Dia 82: Padrão "AI scraper/extractor".
- Dia 83: Padrão "AI evaluator".
- Dia 84: Brainstorm — 5 ideias, escolhe uma.
- Dia 85-89: Projeto final livre — MVP completo (Next.js + Supabase + Claude + agentes + deploy + pagamento).
- Dia 90: Polimento + posta no Twitter/LinkedIn + manda pra 10 testarem.

---

## Checkpoints
- Fim do mês 1: script Node/Python que usa Claude com tools, valida saída, roda sem quebrar.
- Fim do mês 2: construir e fazer deploy de chat com IA, login, banco, em <1 dia.
- Fim do mês 3: olhar qualquer ideia "X com IA" e saber a arquitetura em 30min, ter MVP em 1 semana.

## Recursos
docs.claude.com · Building Effective Agents (Anthropic, ler 3x) · AI Engineer (YouTube) · Vercel AI SDK docs · Supabase docs · shadcn/ui

## Armadilhas
Não trocar de stack · Não ver 10 cursos (um por tópico, depois constrói) · Não buscar perfeição (funciona + no GitHub) · Não pular projeto da semana.