# Aplicação

## Descrição das Pastas e Arquivos

### /src

É o diretório principal da aplicação.

#### /config

- `database.js`: Arquivo de configuração do banco de dados.

#### /controllers

Responsáveis por lidar com as requisições e respostas, utilizando a lógica dos serviços.

- `distribuidoraController.js`: Controlador para operações relacionadas a distribuidoras.
- `editoraController.js`: Controlador para operações relacionadas a editoras.
- `produtoController.js`: Controlador para operações relacionadas a produtos.

#### /models

Contém as definições das entidades e a configuração das tabelas do banco de dados.

- `Distribuidora.js`: Modelo que representa a entidade Distribuidora.
- `Editora.js`: Modelo que representa a entidade Editora.
- `Produto.js`: Modelo que representa a entidade Produto.

#### /routes

Define as rotas da aplicação e mapeia cada rota para seu respectivo controlador

- `distribuidoraRoutes.js`: Rotas relacionadas a distribuidoras.
- `editoraRoutes.js`: Rotas relacionadas a editoras.
- `produtoRoutes.js`: Rotas relacionadas a produtos.

#### /services

Os serviços são chamados pelos controladores, contema a lógica aplicada.

- `distribuidoraService.js`: Serviço que contém a logica para distribuidoras.
- `editoraService.js`: Serviço que contém a lógica para editoras.
- `produtoService.js`: Serviço que contém a lógica para produtos.

#### Index.js

Ponto de entrada da aplição.


#### Arquivos Root

- `Procfile`: Contém instrução para o deploy.

