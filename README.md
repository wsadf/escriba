# cadastro-pessoas-vue

Projeto de teste de front-end para a empresa Escriba cadastro de pessoas, no qual é possível visualizar, cadastrar, editar e excluir um contato. Os dados são armazenados na API utilizando o JSON Server.

#Tecnologias do projeto
Vue: Optei por utilizar Vue devido à minha familiaridade com a tecnologia, o que facilitou o desenvolvimento da aplicação com maior velocidade e agilidade.

Bootstrap: Escolhi o Bootstrap porque se trata de um site simples, com poucas estilizações, e é uma biblioteca que já domino.

Axios: Utilizei o Axios para realizar a requisição dos dados da API, pois é uma biblioteca com a qual já estou familiarizado e que oferece facilidade de uso.

# Configuração do Vue
## Project setup
Na raiz do projeto rodar:
```
npm install
```
Para instalar os pacotes do NPM.

### Compiles and hot-reloads for development
Em seguida rodar:
```
npm run serve
```

Para abrir a versão de desenvolvimento.
Abrir [http://localhost:8080](http://localhost:8080) para visualizar no browser.

A página será recarregada quando houver mudanças salvas no código.

### Compiles and minifies for production
Para visualizar a versão de build, rodar:
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Configuração do JSON Server
Para criar o servidor, entrar na pasta `db`:
```
cd db
```
E rodar:
```
npm start
```
Para verificar se o servidor foi levantado corretarmente, acessar a url [http://localhost:3000](http://localhost:3000) para visualizar no browser.
