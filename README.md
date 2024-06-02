# Cypress@12.2.0 + Mark L - Gerenciador de Tarefas

Repositório do projeto de testes End-to-end (E2E) feitos com **Cypress** :green_heart: para o web app de demonstração: *Mark L - Gerenciador de Tarefas*.

## IDE utilizada nesse projeto

[VS Code](https://code.visualstudio.com/) versão `1.88.1`
   - Extensões
     - [One Dark Pro (Darker)](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme)
     - [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
     - [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)
     - [SQLite Viewer](https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer)

## Pré-requisitos

Você vai precisar dos seguintes sistemas instalados em seu computador:
- [Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701?hl=pt-br&gl=BR)
- [Node.js](https://nodejs.org/dist/v18.12.1/node-v18.12.1-x64.msi) versão `v18.12.1`
  - NPM versão `8.19.2`
- [Git](https://github.com/git-for-windows/git/releases/download/v2.43.0.windows.1/Git-2.43.0-64-bit.exe) versão `2.43.0.windows.1`

> [!NOTE]
> Durante a instalação do Node.js o NPM é automaticamente instalado.

> [!IMPORTANT]
> Para a instalação do Git garantir que as opções "Git Bash Here" e "(NEW!) Add a Git Bash Profile to Windows Terminal" estejam marcadas :white_check_mark:.

## Instalação
### Após clonar o repositório, instalar as dependências da web app que estão na pasta `/apps/markL/`

1. Pasta `api` - API do gerenciador de tarefas, execute o comando
```
npm i
```

2. Para inicializar e criar o banco de dados SQLite da API, execute o comando
```
npm run db:init
```

3. Colocar API em execução
```
npm run dev
```

4. Pasta `web` - Interface gráfica do gerenciador de tarefas, execute o comando
```
npm i
```

5. Colocar Interface gráfica em execução
```
npm run dev
```

### Métodos HTTP
#### Requisições para a API REST

<details>
<summary> :green_circle: GET /Task list </summary>
	
```
curl --request GET \
  --url http://localhost:3333/tasks
```

</details>

<details>
<summary> :yellow_circle: POST /New task </summary>

```
curl --request POST \
  --url http://localhost:3333/tasks \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Comprar ketchup",
	"is_done": false
}'
```

</details>

<details>
<summary> :large_blue_circle: PUT /Update task </summary>

```
curl --request PUT \
  --url http://localhost:3333/tasks/8b161cff-5485-4a06-aaa3-5cde44d34es \
  --header 'Content-Type: application/json' \
  --data '{
	"is_done": true
}'
```

</details>

<details>
<summary> :red_circle: DELETE /Remove task by name </summary>

```
curl --request DELETE \
  --url http://localhost:3333/helper/tasks \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "Ler um livro de Node.js"
}'
```

</details>

<details>
<summary> :red_circle: DELETE /Remove task </summary>

```
curl --request DELETE \
  --url http://localhost:3333/tasks/2aa7dc4e-7148-4ed7-936e-fc9167a4deb8
```
  
 </details>

## Como executar
### Testes

Você pode executá-los tanto em modo interativo, como em modo _headless_.

1. Instalar as dependências do Cypress que estão na pasta raiz `/`, execute o comando
```
npm i
```

2. Para rodar todos os testes em **modo _headless_**, execute o comando
```
npx cypress run --env allure=true
```

3. O relatório de execução dos testes pode ser visualizado com [Allure Report](https://www.npmjs.com/package/@mmisty/cypress-allure-adapter), execute o comando
```
npx allure serve
```

> [!WARNING] 
> É necessário o [Java 8](https://www.oracle.com/java/technologies/downloads/#license-lightbox) para executar o binário do Allure Reports.

> [!TIP]
> Execute os testes através do Lauchpad, modo interativo do Cypress, com o comando `npx cypress open`.

## Funcionalidades Testadas
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

#### home

* [x] webapp deve estar online

#### tarefas > cadastro

* [x] deve cadastrar uma nova tarefa
* [x] não deve permitir tarefa duplicada
* [x] campo obrigatório

#### tarefas > atualização

* [x] deve concluir uma tarefa

#### tarefas > exclusão

* [x] deve remover uma tarefa

