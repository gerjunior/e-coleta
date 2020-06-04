<!--
*** Template em https://github.com/othneildrew/Best-README-Template 
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/gerjunior/e-coleta">
    <img src="images/logo.png" alt="Logo">
  </a>

  <h3 align="center">Ecoleta</h3>

  <p align="center">
    Seu marketplace de coleta de resíduos
    <br />
    <a href="https://github.com/gerjunior/e-coleta/issues">Reporte um Bug</a>
    ·
    <a href="https://github.com/gerjunior/e-coleta/issues">Solicite uma Feature</a>
  </p>

</p>



<!-- TABLE OF CONTENTS -->

## Índice

* [Sobre o Projeto](#sobre-o-projeto)
  * [Ferramentas](#ferramentas)
* [Getting Started](#getting-started)
  * [Pré-requisitos](#pré-requisitos)
  * [Instalação](#instalação)
* [Roadmap](#roadmap)
* [Contribuindo](#contributing)
* [License](#license)
* [Contato](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

Este app foi criado com o intuito de facilitar a reciclagem de materiais e a coleta dos mesmos.
Quer saber onde colocar seu material reciclável? Veio ao lugar certo!

### Ferramentas

* [NodeJS](https://nodejs.org/en/)
* [Typescript](https://www.typescriptlang.org/)
* [React](https://pt-br.reactjs.org/)
* [React Native](https://reactnative.dev/)
* [Postgres](https://www.postgresql.org/)

<!-- GETTING STARTED -->
## Getting Started

Essa é uma das formas que você pode configurar o projeto na sua máquina.
Para ter uma cópia local rodando siga esses passos simples de exemplo.

### Pré-requisitos

Será necessário ter o Docker instalado na sua máquina. 
Você pode instalá-lo clicando [aqui](https://www.docker.com/get-started).

Será necessário também ter um gerenciador de banco de dados universal instalado.
Recomendo o [DBeaver](https://dbeaver.io/)

### Instalação

1. Clone o repositório
```sh
git clone https://github.com/gerjunior/e-coleta
```
2. Instale os pacotes dos projetos (backend, frontend, mobile)
```sh
yarn install
```
3. Crie uma instância do postgres no docker 
```sh
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres
```
4. Crie uma instância do postgres no seu gerenciador de banco de dados com o nome *ecoleta*.
5. Inicie a aplicação 
```sh
yarn dev:server
```

<!-- ROADMAP -->
## Roadmap

Veja a página de [issues](https://github.com/gerjunior/e-coleta/issues) para uma lista de novas features (e erros conhecidos).

<!-- CONTRIBUIÇÕES -->
## Contribuições

Contribuições são o que fazem a comunidade open source ser um lugar tão incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer
será **imensamente apreciada**. 

1. Dê um fork no projeto
2. Crie uma Branch com o nome da Feature (`git checkout -b feature/AmazingFeature`)
3. Dê Commit nas alterações (`git commit -m 'Add some AmazingFeature'`)
4. Dê um Push na Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

<!-- CONTATO -->
## Contato

* Projeto: [https://github.com/gerjunior/e-coleta](https://github.com/gerjunior/e-coleta)
* Meu GitHub: [https://github.com/gerjunior](https://github.com/gerjunior)
* LinkedIn: [https://www.linkedin.com/in/gerjunior/](https://www.linkedin.com/in/gerjunior/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Docker](https://www.docker.com/)
* [Express](https://expressjs.com/pt-br/)
* [Linting](https://stackoverflow.com/questions/8503559/what-is-linting) | [EsLint](https://eslint.org/) 
* [ORM](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwibhdrHzOjpAhXLHLkGHYZ5BbUQwqsBMA16BAgKEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsnOXxJa31GI&usg=AOvVaw0lVRdltJqZhaPZEnZ2dSET)
* [Knex](http://knexjs.org/)
* [Yarn](https://yarnpkg.com/)
* [Styled Components](https://styled-components.com/)
* [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)
* [SPAs](https://www.devmedia.com.br/ja-ouviu-falar-em-single-page-applications/39009)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/gerjunior/e-coleta.svg?style=flat-square
[contributors-url]: https://github.com/gerjunior/e-coleta/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/gerjunior/e-coleta.svg?style=flat-square
[forks-url]: https://github.com/gerjunior/e-coleta/network/members
[stars-shield]: https://img.shields.io/github/stars/gerjunior/e-coleta.svg?style=flat-square
[stars-url]: https://github.com/gerjunior/e-coleta/stargazers
[issues-shield]: https://img.shields.io/github/issues/gerjunior/e-coleta.svg?style=flat-square
[issues-url]: https://github.com/gerjunior/e-coleta/issues
[license-shield]: https://img.shields.io/github/license/gerjunior/e-coleta.svg?style=flat-square
[license-url]: https://github.com/gerjunior/e-coleta/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/gerjunior
[product-screenshot]: images/screenshot.png