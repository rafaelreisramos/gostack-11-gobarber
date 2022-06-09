<h1 align="center">
    <img alt="GoBarber" src="./.github/cover.svg" />
</h1>

<br>

# GoBarber

Este repositório é resultado do projeto desenvolvido no curso de formação Javascript fullstack GoStack, atual [Ignite](https://www.rocketseat.com.br/ignite) da Rocketseat.

O projeto é composto de 3 aplicações: uma api REST, um web app desenvolvido em React e um aplicativo mobile desenvolvido em React Native.

A aplicação foi publicada aqui no Github como um monorepo isolado, isto é, não existe um compartilhamento de código, nem da pasta node_modules.

<!-- A decisão aqui se dá principalmente por dificuldades adicionais em manter um monorepo
compartilhado com a aplicação mobile na época em que a aplicação foi desenvolvida (Obs.:
com o expo na versão 45.0.0 ainda são necessárias configurações adicionais para que a pasta
node_modules funcione adequadamente como você pode ver aqui
[Working with Monorepos](https://docs.expo.dev/guides/monorepos/)). -->

Optou-se por esta configuração para deixar todas as partes (api, web, mobile) da aplicação reunidas em um único repositório ainda que com código não compartilhado entre as aplicações.

Os deploys da api e web (feitos a partir das `github actions`) são individualizados.

Para verificar o funcionamento do projeto clone o repositório

```bash
git clone https://github.com/rafaelreisramos/gostack-11-gobarber.git
```

ou

```bash
git clone git@github.com:rafaelreisramos/gostack-11-gobarber.git
```

Entre no diretório do projeto

```
cd gostack-11-gobarber
```

A partir deste diretório você tem acesso às 3 aplicações divididas nas pastas api, web e mobile. As instruções a seguir mostram como rodar cada um dos projetos em sua máquina local.

Assumo aqui que você esteja utilizando Linux, WSL ou um MacOs com acesso a um terminal Unix.

Caso não esteja, podem ocorrer alguns erros com variáves de ambiente na execução dos scripts. Para maiores esclarecimentos você pode consultar o site [cross-env](https://github.com/kentcdodds/cross-env#readme), instalar o pacote a aplicar quaisquer modificações que sejam necessárias.

## GoBarber API (REST api)

Uma API REST com:

- [Node.js](https://nodejs.org/en/)
- Framework [Express](https://expressjs.com/)
- Princípios de desenvolvimento SOLID
- Banco de dados [PostgresSQL](https://www.postgresql.org/) para cadastro de usuários e agendamentos
- Banco de dados [MongoDB](https://www.mongodb.com/) para armazenamento das notificações e mensagens
- Banco de dados [redis]() para dados de cache e limitação de requisições
- Containers [docker](https://www.docker.com/) com [docker compose](https://docs.docker.com/compose/) para desenvolvimento e deploy

### Tecnologias usadas

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- Envio de emails com [AWS SES](https://aws.amazon.com/ses/) e [Nodemailer](https://nodemailer.com/about/)
- Templates de e-mail com [handlebars](https://handlebarsjs.com/)
- Upload de arquivos com [AWS S3](https://aws.amazon.com/s3/) e [Multer](https://github.com/expressjs/multer#readme)
- Integração com [AWS SDK](https://aws.amazon.com/sdk-for-javascript/)
- Autenticação com [JWT](https://jwt.io/)
- ORM com [TypeORM](https://typeorm.io/)
- Logs com [Pino](https://getpino.io/#/) e [pino-pretty](https://github.com/pinojs/pino-pretty)
- Validação de campos com [Celebrate](https://github.com/arb/celebrate)
- Injeção de dependências com decorators usando [tsyringe](https://github.com/microsoft/tsyringe)
- Limitação de requisições à API com [node-rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible#readme)
- Tratamento de datas com [date-fns](https://date-fns.org/)
- Testes com [jest](https://jestjs.io/)
- Formatação com [Prettier](https://prettier.io/) e análise estática de código com [eslint](https://eslint.org/)
- Build do projeto com [Babel](https://babeljs.io/)
- Execução de projeto Typescript com [ts-node](https://typestrong.org/ts-node/)

### Rodando a aplicação localmente

1. [Instale o nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
2. Instale o node na versão 16.x

```bash
nvm v16.15.0
```

3. [Instale o docker compose](https://docs.docker.com/compose/install/)
4. [Instale o yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)
5. Vá para o diretório api

```bash
cd api
```

6. Copie o arquivo .env.example para um arquivo .env

```bash
cp .env.example .env
```

7. Suba os containers de banco de dados (docker compose ou docker-compose)

```bash
docker compose up -d
```

8. Verifique se os containers estão ativos

```bash
docker ps -a
```

9. Caso não estejam ativos confira os logs substituindo o `container_id` pelo `id` informado no comando anterior.

```bash
docker container container_id logs
```

10. Caso esteja tudo correto instale as dependências com

```bash
yarn install
```

11. Inicie a aplicação

```bash
yarn dev:server
```

12. Acesse a aplicação no endereço [http://localhost:3333](http://localhost:3333)

### Deploy

Todo...

<!-- ### Deploy

A API do GoBarber foi publicada na Digital Ocean.

A estratégia utilizada no deploy da aplicação é mais barebone. Foram utilizados
container dockers para os bancos de dados PostgreSQL, MongoDB e Redis. Um arquivo
docker-compose-production.yaml foi utilizado para facilitar a criação dos containers.

Hoje a plataforma já conta com um serviço especial para publicação de apps chamado
App ... mais fácil de configurar e que auxilia com alguns ...


Depois de criar o droplet na Digital Ocean acesse o servidor por ssh

```bash
ssh root@ip_do_droplet
```

```bash
apt update
```

```bash
apt dist upgrade
```

Crie um usuário deploy

```bash
adduser deploy
```

Adicione o usuário ao grupo sudo

```bash
usermod -aG sudo deploy
```

Verifique se existe uma pasta .ssh e altere sua propeiedade para o usuário deploy

```bash
chown deploy:deploy .ssh/
```

Se não existir um diretório crie e altere a propriedade conforme comanddo anterior

```bash
mkdir .ssh
```

Copie as chaves autorizadas no login ssh do usuário root para o usuário deploy

```bash
cp ~/.ssh/authorized_keys /home/deploy/.ssh/
```

Faça logout do ssh e login novamente com usuário deploy
Instalar o node

```bash
sudo npm install --location=global yarn
```

Verifique a instalação do yarn

```bash
yarn --version
```

Assim o setup de configuração inicial do sistema ...

Agora vamos partir para configurações do proxy reverso com Nginx e certificado SSL
com a [Certbot](https://certbot.eff.org/) -->

## GoBarber Web (web app com React.JS)

[Layout do GoBarber no Figma](https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber?node-id=34%3A1180)

O app web do GoBarber foi desenvolvido em React usando o a ferramenta de criação
[create-react-app](https://create-react-app.dev/).

O app web é voltado para os prestadores de serviço da plataforma GoBarber.

Os prestadores de serviços acessam a área logada e podem verificar os agendamentos dos
clientes e configurar o perfil.

Já os clientes acessam o app mobile para agendar os serviços.

### Tecnologias usadas

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/) com uso dos [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Context API](https://reactjs.org/docs/context.html) com hooks personalizados
- Animações com [react-spring](https://react-spring.io/)
- Formulários com o [Unform](https://unform-rocketseat.vercel.app/)
- Validação de campos com [Yup](https://github.com/jquense/yup)
- Estilos com [styled-Components](https://styled-components.com/)
- Tratamento de datas com [date-fns](https://date-fns.org/)
- Testes com [jest](https://jestjs.io/) e [testing-library](https://testing-library.com/)
- Requisições http com [axios](https://axios-http.com/docs/intro)
- Formatação com [Prettier](https://prettier.io/) e análise estática de código com [eslint](https://eslint.org/)

## GoBarber Mobile (mobile app em React Native)

### Tecnologias usadas

- [Typescript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [React Context API](https://reactjs.org/docs/context.html) com hooks personalizados
- Navegação com [React Navigation](https://reactnavigation.org/)
- Animações com [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- Captura de Imagens com a Câmera ou seleção da Galeria com [React Native Image Picker](react-native-image-picker)
- Armazenamento local com [async-storage](https://github.com/react-native-async-storage/async-storage#readme)
- Ícones com [Vector Icons](react-native-vector-icons)
- Formulários com o [Unform](https://unform-rocketseat.vercel.app/)
- Validação de campos com [Yup](https://github.com/jquense/yup)
- Estilos com [styled-Components](https://styled-components.com/)
- Tratamento de datas com [date-fns](https://date-fns.org/)
- Testes com [jest](https://jestjs.io/) e [testing-library](https://testing-library.com/)
- Requisições http com [axios](https://axios-http.com/docs/intro)
- Formatação com [Prettier](https://prettier.io/) e análise estática de código com [eslint](https://eslint.org/)

<!--
```bash
adb reverse tcp:3333 tcp:3333
``` -->
