# Phase 1: Fork & Monorepo Setup - Context

**Gathered:** 2026-04-13
**Status:** Ready for research/planning

<domain>
## Phase Boundary
Clonagem do código-fonte do Open WebUI para `development/src_rabelus`, configuração do `docker-compose.yml` para build local (abandonando a imagem pré-compilada) e persistência do banco de dados/RAG na máquina Host.
</domain>

<decisions>
## Implementation Decisions

### Versão do Código-Fonte Alvo
- **Estratégia:** Manter atrelado à branch `main` oficial do Open WebUI para aproveitar as atualizações da comunidade open-source.
- **Objetivo:** Honrar e colaborar com a comunidade originária do Open WebUI. O produto terá identidade "Argenta Fenix WebUI" através de nosso ecossistema e rebranding de interface, permitindo atualizações constantes sem perder a base. O sistema evoluirá para um estilo Mission Control complexo (Openclaw).

### Estrutura do Dockerfile / Build
- **Estratégia:** Criaremos um arquivo declarativo `dockerfile.rabelus` em vez de rodar o Dockerfile nativo deles às cegas.
- **Objetivo:** O Rabelus Lab ganha controle do entrypoint do contêiner. Num primeiro momento será para compilar o core deles de forma limpa, e posteriormente servirá para embarcar nossos próprios pacotes, bibliotecas Python e plugins no Build.

### Mapa de Persistência Física
- **Decisão:** Confiado ao agente (the agent's Discretion). Faremos uma persistência holística e eficiente baseada na estrutura de pastas raiz (ex: SQLite em diretórios perenes).

### the agent's Discretion
- Maneira exata de acoplar a matriz do código (Git clone estático, hard-fork, ou Submodule).
- Binding de portas além das estipuladas do Docker e pastas de VectorDB.
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Base
- `.planning/PROJECT.md` — Visão Arquitetural Rabelus
- `.planning/REQUIREMENTS.md` — Requisitos (Ollama 11434, Glassmorphism Olive)

</canonical_refs>

<specifics>
## Specific Ideas
- "Argenta Fenix WebUI" é o termo cunhado para o projeto resultante. O propósito transcende um simples cliente de chat e se projeta como Mission control.
</specifics>

<deferred>
## Deferred Ideas
- Orquestração Multi-Canais avançada e integrações Openclaw mais complexas (estas pertencem organicamente à Fase 4, pós-estabelecimento mecânico do monorepo).
</deferred>

---

*Phase: 1-fork-monorepo-setup*
*Context gathered: 2026-04-13 via discuss-phase*
