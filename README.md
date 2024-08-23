# Node CLI - Basic
```bash
  _   _               _             ____   _       ___     ____                  _
 | \ | |   ___     __| |   ___     / ___| | |     |_ _|   | __ )    __ _   ___  (_)   ___
 |  \| |  / _ \   / _` |  / _ \   | |     | |      | |    |  _ \   / _` | / __| | |  / __|
 | |\  | | (_) | | (_| | |  __/   | |___  | |___   | |    | |_) | | (_| | \__ \ | | | (__
 |_| \_|  \___/   \__,_|  \___|    \____| |_____| |___|   |____/   \__,_| |___/ |_|  \___|
```
O **Node CLI** é uma ferramenta de linha de comando para gerenciamento de senhas. Permite adicionar, listar, atualizar, remover e buscar senhas armazenadas em um arquivo local. As senhas são criptografadas para garantir a segurança.

## Funcionalidades

- **Adicionar Senhas**: Armazene novas senhas com nome de site e credenciais.
- **Listar Senhas**: Visualize senhas armazenadas após fornecer uma senha de administrador.
- **Atualizar Senhas**: Modifique as senhas existentes.
- **Remover Senhas**: Exclua senhas armazenadas.
- **Buscar Senhas**: Encontre senhas que correspondam a um critério de pesquisa.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```bash
# Estrutura de arquivos
node-cli-basic/
├── commands/
│   └── credentials.js
├── config/
│   └── cliConfig.js
├── utils/
│   ├── encryption.js
│   └── fileManager.js
├── index.js
└── package.json
```
<br/>

- **`commands/`**: Contém funções para gerenciar senhas.
  - **`credentials.js`**: Arquivo com funções para adicionar, listar, atualizar, remover e buscar senhas.
  
- **`config/`**: Configuração do CLI, exibição do banner e seleção de ações.
  - **`cliConfig.js`**: Arquivo responsável pela configuração do CLI, incluindo exibição de banner e seleção de ações.
  
- **`utils/`**: Utilitários auxiliares para criptografia e gerenciamento de arquivos.
  - **`encryption.js`**: Contém funções para criptografar e descriptografar senhas.
  - **`fileManager.js`**: Gerencia a leitura e escrita de arquivos onde as senhas são armazenadas.
  
- **`index.js`**: Ponto de entrada do CLI que inicializa a aplicação e direciona as ações conforme a escolha do usuário.

- **`package.json`**: Gerenciador de dependências e scripts para o projeto.

## Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Este projeto foi desenvolvido com Node.js versão 16 ou superior.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/sammervalgas/0824-node-cli-basic.git node-cli-basic
    cd node-cli-basic
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

## Uso

O CLI é executado através do comando `npm start`. Ao executar o comando, você será solicitado a escolher uma ação para gerenciar as senhas.

### Comandos Disponíveis

- **Adicionar Senha**: `addPassword`
    - Solicita o nome do site, o nome de usuário e a senha para adicionar.
- **Listar Senhas**: `listPasswords`
    - Solicita uma senha de administrador e exibe todas as senhas armazenadas.
- **Atualizar Senha**: `updatePassword`
    - Solicita o site, novo nome de usuário e nova senha para atualizar.
- **Remover Senha**: `removePassword`
    - Solicita o site para remover a senha correspondente.
- **Buscar Senha**: `findPassword`
    - Solicita um termo de pesquisa e uma senha de administrador para encontrar senhas correspondentes.

### Exemplos de Uso

```bash
npm start

### OUTPUT
> node index.js

  _   _               _             ____   _       ___     ____                  _
 | \ | |   ___     __| |   ___     / ___| | |     |_ _|   | __ )    __ _   ___  (_)   ___
 |  \| |  / _ \   / _` |  / _ \   | |     | |      | |    |  _ \   / _` | / __| | |  / __|
 | |\  | | (_) | | (_| | |  __/   | |___  | |___   | |    | |_) | | (_| | \__ \ | | | (__
 |_| \_|  \___/   \__,_|  \___|    \____| |_____| |___|   |____/   \__,_| |___/ |_|  \___|

? Choose an action: (Use arrow keys)
❯   addPassword
    listPasswords
    updatePassword
    removePassword
    findPassword
```

1. **Adicionar Senha**

    Escolha `addPassword` e siga as instruções no prompt para adicionar uma nova senha.

2. **Listar Senhas**

    Escolha `listPasswords`, insira a senha de administrador e veja a lista de senhas armazenadas. 
    
    Senha de teste: _*admin*_

3. **Atualizar Senha**

    Escolha `updatePassword`, selecione o site para atualizar e forneça os novos dados.

4. **Remover Senha**

    Escolha `removePassword`, selecione o site para remover e confirme a exclusão.

5. **Buscar Senha**

    Escolha `findPassword`, insira um termo de pesquisa e a senha de administrador para encontrar senhas que correspondam ao critério.


<br/>

## Dependências

O projeto utiliza as seguintes bibliotecas para fornecer uma melhor experiência de linha de comando:

### `chalk`

- **Descrição**: O `chalk` é uma biblioteca para estilizar o texto no terminal, permitindo adicionar cores e estilos ao texto.
- **Uso no Projeto**: Utilizado para colorir e formatar mensagens de saída, como erros, sucessos e informações, para melhorar a legibilidade e a apresentação no terminal.
- **Comando de Instalação**: `npm install chalk`

**Exemplo de Uso:**

```javascript
import chalk from 'chalk';
console.log(chalk.green('Password added successfully.'));
```

### `figlet`

- **Descrição**: O `figlet` é uma biblioteca que gera texto ASCII em estilo de arte, útil para criar banners e títulos estilizados no terminal.
- **Uso no Projeto**: Utilizado para gerar um banner estilizado que é exibido quando o CLI é iniciado, criando uma primeira impressão visual impactante.
- **Comando de Instalação**: `npm install figlet`

**Exemplo de Uso:**

```javascript
import figlet from 'figlet';
console.log(figlet.textSync('DevBean CLI', { horizontalLayout: 'full' }));
```

### `inquirer`

- **Descrição**: O `inquirer` facilita a criação de prompts interativos no terminal, coletando informações dos usuários através de perguntas e respostas.
- **Uso no Projeto**: Utilizado para exibir prompts de entrada para o usuário, como perguntar sobre o site, nome de usuário e senha, e para autenticação de senha de administrador.
- **Comando de Instalação**: `npm install inquirer`

**Exemplo de Uso:**

```javascript
import inquirer from 'inquirer';
const { site } = await inquirer.prompt([
    { type: 'input', name: 'site', message: 'Enter site name:' }
]);
```

### `ora`

- **Descrição**: O `ora` é uma biblioteca para exibir indicadores de carregamento e spinners no terminal, mostrando que uma operação está em progresso.
- **Uso no Projeto**: Utilizado para exibir um spinner enquanto o CLI está carregando ou processando informações, como ao listar ou buscar senhas.
- **Comando de Instalação**: `npm install ora`

**Exemplo de Uso:**

```javascript
import ora from 'ora';
const spinner = ora('Fetching passwords...').start();
// Simulação de operação
spinner.stop();
```

## Contribuição
Sinta-se à vontade para contribuir com melhorias e correções. Para isso, faça um fork do projeto, crie uma branch para sua modificação e envie um pull request.

## Autores

- SAMMER VALGAS - XGH Expert 