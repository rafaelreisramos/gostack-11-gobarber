<h1 align="center">
    <img alt="GoBarber" src="../.github/cover.svg" />
</h1>

<br>

# GoBarber

A aplicação foi publicada aqui no Github como um monorepo isolado, isto é, não existe
um compartilhamento de código, nem da pasta node_modules.

<!-- A decisão aqui se dá principalmente por dificuldades adicionais em manter um monorepo
compartilhado com a aplicação mobile na época em que a aplicação foi desenvolvida (Obs.:
com o expo na versão 45.0.0 ainda são necessárias configurações adicionais para que a pasta
node_modules funcione adequadamente como você pode ver aqui
[Working with Monorepos](https://docs.expo.dev/guides/monorepos/)). -->

Optou-se por esta configuração para deixar todas as partes (api, web, mobile) da aplicação
reunidas em um único repositório ainda que com código não compartilhado.

Os deploys da api e web são individualizados.

Para verificar o funcionamento do projeto clone o repositório

- https

```bash
git clone https://github.com/rafaelreisramos/gostack-11-gobarber.git
```

ou

- ssh

```bash
git clone git@github.com:rafaelreisramos/gostack-11-gobarber.git
```

## GoBarber API

1 - [Instale o nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

2 - Instale o node na versão 16.x

```bash
nvm v16.15.0
```

3 - [Instale o docker compose](https://docs.docker.com/compose/install/)

4 - [Instale o yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

5 - Vá para o diretório api

```bash
cd api
```

6 - Copie o arquivo .env.example para um arquivo .env

```bash
api> cp .env.example .env
```

7 - Suba os containers de banco de dados (docker compose ou docker-compose)

```bash
api> docker compose up -d
```

8 - Verifique se os containers estão ativos

```bash
docker ps -a
```

9 - Caso não estejam ativos confira os logs com

```bash
docker container container_id logs
```

10 - Caso esteja tudo correto instale as dependências com

```bash
api> yarn install
```

11 - Inicie a aplicação

```bash
api> yarn dev:server
```

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
com a Certbot -->

## Web app com React.JS

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
- Formulários com o [Unform]()
- Validação de campos com [Yup](https://github.com/jquense/yup)
- Estilos com [styled-Components](https://styled-components.com/)
- Tratamento de datas com [date-fns](https://date-fns.org/)
- Testes com [jest](https://jestjs.io/) e [testing-library](https://testing-library.com/)
- Requisições http com [axios](https://axios-http.com/docs/intro)
- Formatação com [Prettier](https://prettier.io/) e análise estática de código com [eslint](https://eslint.org/)

## React Native mobile app

<!--
```bash
adb reverse tcp:3333 tcp:3333
``` -->
