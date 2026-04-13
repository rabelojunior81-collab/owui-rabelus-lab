---
wave: 1
depends_on: []
files_modified:
  - ".gitmodules"
  - "development/dockerfile.rabelus"
  - "development/docker-compose.yml"
autonomous: true
---

# Phase 1: Fork & Monorepo Setup - Plan

## Goal
Construir a fundação do "Argenta Fenix WebUI" atrelando a branch `main` oficial da comunidade ao nosso repositório via Git Submodule, e arquitetar o build containerizado local para a persistência correta perante as diretrizes estipuladas.

<tasks>

### 1. Injetar Submódulo Open WebUI
<read_first>
- .planning/phases/1-fork-monorepo-setup/1-CONTEXT.md
</read_first>
<action>
Adicionar o repositório oficial do Open WebUI (https://github.com/open-webui/open-webui.git) como um **Git Submodule** apontando para o diretório `development/src_rabelus` na branch `main`. Esta decisão captura as atualizações *upstream* com fluidez usando recursos nativos do Git, cumprindo a diretriz de colaborar com o open-source ao invés de plagiar desconectado.
</action>
<acceptance_criteria>
- Arquivo `.gitmodules` deve existir na raiz contendo caminho `development/src_rabelus` apontando para o repo Github oficial.
- Pasta `development/src_rabelus/backend` deve estar obrigatoriamente preenchida após o comando init do módulo.
</acceptance_criteria>

### 2. Criar Dockerfile de Entrada (Rabelus)
<read_first>
- development/src_rabelus/Dockerfile
</read_first>
<action>
Criar o arquivo `development/dockerfile.rabelus`. 
Ele fará um espelho integral da configuração do Dockerfile original do Open WebUI copiando toda a mecânica de empacotamento deles construída pela comunidade, mas abrigado fora da pasta *src*. Isso garante a inviolabilidade das nossas customizações de build durante atualizações futuras.
</action>
<acceptance_criteria>
- `development/dockerfile.rabelus` é criado.
- Padrões essenciais como instalações Pip e compilações Node Vite nativos de Open WebUI existem neste arquivo modificado ou instanciado.
</acceptance_criteria>

### 3. Orquestração com Docker Compose
<read_first>
- development/dockerfile.rabelus
</read_first>
<action>
Construir o `development/docker-compose.yml` que sobe o "Argenta Fenix WebUI" acionado pelo arquivo dockefile configurado.
Requisitos rigorosos:
1. `context`: apontando para dentro de `src_rabelus` com o build invocando o arquivo ascendente `../dockerfile.rabelus`.
2. Volumes: Mapear a pasta de dados do container (tipicamente `/app/backend/data`) explicitamente para `development/memory/cortex`.
3. Variáveis de ambiente: Plugar `OLLAMA_BASE_URL` atrelada a `http://host.docker.internal:11434` configurando comunicação host-Ollama Windows.
4. Porta de Servidor: Transportar interface container 8080 para 3000 Host (porta alvo de desenvolvimento Rabelus).
</action>
<acceptance_criteria>
- `development/docker-compose.yml` existe.
- Config contém `OLLAMA_BASE_URL: http://host.docker.internal:11434`.
- Volumes explicitamente contém `./memory/cortex`.
- Porta exportada é `:3000`.
</acceptance_criteria>

</tasks>

<must_haves>
- Banco local local em `development/memory/cortex` (SQLite + Embeddings VectorDB + Chroma) não recriado a cada recompilação.
- Orquestrador GSD consegue executar commits de submódulo sem crashes de árvore principal.
</must_haves>
