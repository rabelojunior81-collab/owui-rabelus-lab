# GSD Discuss: Agente Multimodal Rabelus Lab

## Objetivo Inicial
Transformar o Open WebUI (Fork) em um Agente Multimodal Proprietário do Rabelus Lab.

## Análise de Requisitos (Discussão)
Você levantou os seguintes pontos:
1. **Alteração de UI/Aparência:** O layout deve usar os tokens "Glassmorphism Olive Militar". O TailwindCSS/Svelte precisará ser adaptado drasticamente.
2. **Substituição de Motor de TTS:** O motor padrão atual não atende aos requisitos; precisaremos plugar e acoplar um motor avançado, como Azure, ElevenLabs, ou XTTS otimizado de forma nativa no pipeline do backend Python.
3. **Escopo do Repositório:** A arquitetura do *Docker Compose* apontará não mais para uma imagem morta, mas usará `build: .` a partir da raiz de um repositório forkeado.
4. **Acoplamento com Awesome-Skills:** A interface de chat precisará compreender os artefatos locais `.agent/` ou as chamadas de contexto do GSD para operar em uníssono.

## Decisões Arquiteturais Acordadas
- Ao invés da imagem em pacote final, nós hospedaremos o código-fonte (monorepo frontend/backend).
- A separação "Cortex/Core" via Docker Volumes + Ollama Server (Nativo no Host) se manterá inquebrantável para não sobrecarregar a Docker Engine no Windows com modelos brutos, enviando a requisição para `http://host.docker.internal:11434`.

*(Discussão registrada e homologada pelo Arquiteto)*
