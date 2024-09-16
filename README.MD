# Micro Frontend com Module Federation e Webpack

Este projeto demonstra a implementação de uma arquitetura de **Micro Frontends** (MFE) usando **Webpack 5 Module Federation**. Ele consiste em um **container principal** e dois **micro frontends** (MFE1 e MFE2), que podem ser desenvolvidos e implantados de forma independente.

## Estrutura do Projeto

```
mfe-example/
│ 
├── container/  # Aplicação container principal
├── mfe1/       # Micro Frontend 1 
└── mfe2/       # Micro Frontend 2
```

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (geralmente incluído com o Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/rbm79/mfe-webpack.git
   cd mfe-webpack
   ```

2. Instale as dependências para cada aplicação:

   ```bash
   cd container && npm install
   cd ../mfe1 && npm install
   cd ../mfe2 && npm install
   ```

## Configuração

Cada aplicação (`container`, `mfe1`, `mfe2`) possui seu próprio arquivo de configuração do Webpack. Certifique-se de que os arquivos `webpack.config.js` em cada diretório estejam configurados corretamente para o uso do Module Federation.

## Executando o Projeto

1. Inicie cada aplicação em um terminal separado:

   - **Terminal 1 (Container):**

     ```bash
     cd container
     npm start
     ```

   - **Terminal 2 (MFE1):**

     ```bash
     cd mfe1
     npm start
     ```

   - **Terminal 3 (MFE2):**

     ```bash
     cd mfe2
     npm start
     ```

2. Abra o navegador e acesse o container principal em `http://localhost:3000`.

## Como o Projeto Foi Criado

1. **Inicialização do Projeto:**
   - Criamos diretórios separados para o `container`, `mfe1`, e `mfe2`.
   - Cada diretório foi inicializado como um projeto Node.js com `npm init -y`.

2. **Instalação das Dependências:**
   - Webpack e suas dependências foram instalados em cada projeto:
     ```bash
     npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
     ```
   - Instalamos React e suas dependências em cada aplicação:
     ```bash
     npm install react react-dom
     ```

3. **Configuração do Webpack:**
   - Cada aplicação tem um arquivo `webpack.config.js`, configurado para suportar o Module Federation.
   - Definimos os entry points, output, e plugins necessários para cada MFE.

4. **Desenvolvimento dos Componentes:**
   - Criamos componentes React simples em cada MFE.
   - O container foi configurado para consumir e renderizar os MFEs dinamicamente.

5. **Configuração do Module Federation:**
   - No **container**, configuramos para consumir os MFEs.
   - Nos **MFEs**, configuramos para expor componentes específicos através do Webpack Module Federation.

6. **Testes e Ajustes:**
   - Testamos a integração entre o container e os MFEs.
   - Ajustes de configuração foram feitos conforme necessário para garantir o funcionamento adequado.

## Próximos Passos

- Implementar um sistema de roteamento compartilhado entre o container e os MFEs.
- Adicionar testes unitários e de integração usando ferramentas como Jest.
- Configurar pipelines de CI/CD para automatizar a implantação de cada MFE.

## Contribuindo

Contribuições são muito bem-vindas! Por favor, siga nossas diretrizes de contribuição antes de enviar pull requests.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---

Essa nova versão melhora a legibilidade e fluidez, além de incluir subtítulos claros para cada seção. Além disso, o uso de formatação de código e explicações adicionais nas instruções torna o processo mais fácil de seguir.