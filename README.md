# Original API

## API para gestão de clientes.

## Requisitos
    - Postgre

## Como instalar

```
git clone https://github.com/Junior743/originalPlatform
cd originalPlatform
npm install
```

## Como usar

```
npm run start:dev
```

## Como executar os testes

```
npm test
```

## Outros comandos
```
migrate": 
```
```
migrate:reset: 
```
```
migrate:createClientsTable: 
```
```
migrate:undo: 
```
```
pretest": 
```

## Regras

### Criar projeto REST de cadastro de client

#### Linguagens e frameworks possíveis para este teste:

        -Java (Spring Boot, Data JPA, Hibernate);
        -Node (Sequelize ORM); OK

#### Documentação:

        -Trabalhamos com o padrão API First, então que tal iniciar o desenvolvimento pela documentação swagger?

#### API externa:

        -Utilizar da api viacep.com.br para buscar endereço pelo CEP;

#### Serviços entregues:

        -Busca de cadastro por email;
        -Inclusão de cadastro; OK
        -Alteração de cadastro;
        -Serviço que verifica se email já existem na base;

#### Regra de negócio:

        -Cliente pode ter mais de um endereço, e mais de um telefone, email é um dado único; OK
        -Cliente deve ser único na base (email, e cpf); OK
        -Para salvar o endereço, a api tem que buscar o endereço completo via cep;
        -Ao finalizar o cadastro na plataforma, o cliente deve receber uma notificação no email de cadastro;

#### Testes unitários:

        -cobertura mínima de 60%;

#### Versionamento:

        - Versionar no github na branch development;
        - Enviar link do projeto;
