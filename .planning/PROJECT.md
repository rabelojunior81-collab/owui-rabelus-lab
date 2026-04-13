# Agente Multimodal Rabelus

## 1. What This Is
Bifurcação (Fork) física do Open WebUI para prover um sistema neural multimodal com identidade proprietária no framework Cortex/Core.

## 2. Core Value
- Interface 100% controlada (Glassmorphism + Olive-Militar Argenta).
- Inteligência vocal nativa via interceptação do backend FastAPI para TTS avançado.
- Orquestrador embutido interagindo com a plataforma GSD local.

## Requirements

### Validated
(None yet — ship to validate)

### Active
- [ ] Fonte do Open WebUI clonada e servindo via monorepo.
- [ ] Nova infra docker (`build: ./src_rabelus`) consumindo o Ollama configurado (11434).
- [ ] Estética CSS: Glassmorphism e paleta `#4B5320` base aplicados.
- [ ] Backend: Sistema TTS plugável avançado substituindo o fallback atual do WebUI.
- [ ] Frontend: Acoplamento das ferramentas locais (`Awesome Skills`/`GSD`) no painel de UI.

### Out of Scope
- [Exclusion 1] Usar imagem pre-compilada da internet (incompatível com mutação profunda).

## Key Decisions
| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Fork c/ Build Local | Única forma de injetar modais CSS profundos e customizar Python. | — Pending |

## Evolution
This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-13 after initialization*
