# Requirements: Agente Multimodal Rabelus

## 1. Core Capabilities
- **Monorepo Build:** Containerização apontando para build local de `src_rabelus`.
- **TUI/GUI Modificada:** TailwindCSS alterado para Glassmorphism. Fundo semi-translúcido, paleta militar Argenta.
- **Backend Expandido:** Integração nativa de serviço de voz (TTS Premium).
- **Core Integrado:** Orquestração direta pelo WebUI consumindo GSD e Ollama (11434).

## 2. Technical Constraints
- Conexão SQLite / Vetor persistida na máquina nativa.
- SvelteKit + Vite HMR rodando fora do docker apenas para dev.

## 3. Success Criteria
O "Agente Multimodal" deve abrir na porta 3000 com o design verde militar, permitir conversa com o Ollama local e conseguir fazer leitura falada por TTS avançado, sem gargalos.
