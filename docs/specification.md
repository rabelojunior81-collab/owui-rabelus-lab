# GSD Specification: Agente Multimodal Rabelus

## 1. Escopo
Criar uma bifurcação (Fork) física do Open WebUI, executado diretamente na pasta `development/`, contendo nossa arquitetura "Cortex/Core" nativa, visando prover um sistema neural multimodal com identidade proprietária.

## 2. Componentes Arquiteturais

### 2.1 Backend (Python / FastAPI)
- **Modificações de TTS:** Inserção de uma interface padronizada que suporte provedores nativos avançados, derrubando o script de fallback padrão do WebUI.
- **Integração de Memória:** Otimização dos endpoints SQLite vetoriais, mantendo estrita conexão via porta exposta com a infra `Core` do sistema local (Ollama).

### 2.2 Frontend (SvelteKit / TailwindCSS)
- **Token de Estilo:** Aplicação de Glassmorphism. Fundo semi-translúcido com desfoque de backdrop.
- **Paleta de Cores Militar:** Substituição dos tons neutros normais para `#4B5320` base, contrastes amarelados/dourados de interface `Argenta`.
- **Roteamento UI:** Alteração nos menus esquerdo/direito para abrigar a janela de contexto multimodal (Awesome Skills painel, botões de ação macro do GSD na própria UI).

## 3. Topologia de Infraestrutura (Monorepo Docker)
- Ao passo que antes o `docker-compose.yml` baseava-se em `ghcr.io/open-webui/open-webui:main`, ele passará a usar `build: ./src_rabelus`.
- Exigência de construção em Live Reload local no Node.js apenas enquanto estilizamos a TUI/GUI.
