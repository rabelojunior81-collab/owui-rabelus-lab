# Roadmap: Agente Multimodal Rabelus

## Overview
Transformar o repositório Open WebUI num fork completo de orquestração multimodal.

## Phases

### Phase 1: Fork & Monorepo Setup
- Clonar o código-fonte original do Open WebUI para `development/src_rabelus`.
- Atualizar o `docker-compose.yml` para compilação local de backend/frontend ao invés da imagem em nuvem.
- Validar persistência do banco SQLite e RAG rodando na porta alvo.

### Phase 2: Transplante Visual (Glassmorphism Olive)
- Injetar design tokens baseados em `#4B5320` no TailwindCSS.
- Transformar modais, sidebars e o backdrop canvas para `backdrop-blur` semi-translúcido.
- Re-design do app shell.

### Phase 3: Advanced Voice/TTS Pipeline
- Interceptar e substituir o endpoint padrão de leitura de áudio no backend FastAPI.
- Plugar biblioteca TTS avançada de alta fidelidade nativa no Python e expor o painel visual no Front.

### Phase 4: Oráculo (GSD / Awesome Skills Dashboard)
- Reestruturar menu direito da GUI para visualização interativa dos `Context Packets` criados pelo GSD.
- Criar barra de acionadores de comandos `/` na própria interface baseada em Awesome Skills.

## Backlog / Someday
- Suporte a multi-agentes no mesmo chat operando em paralelo no plano de fundo.
