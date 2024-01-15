# School Manager

## Descrição do Projeto

O School Manager é uma aplicação desenvolvida para facilitar a apresentação de boletins escolares. Ele oferece uma plataforma intuitiva e fácil de usar para professores e administradores escolares inserirem, gerenciarem e compartilharem os boletins de notas dos alunos. A aplicação visa simplificar o processo de criação e distribuição de relatórios acadêmicos, promovendo uma comunicação eficiente entre escola, professores, alunos e seus responsáveis.

---

## Índice

1. [Como Usar](#como-usar)
2. [Variáveis de Ambiente](#variáveis-de-ambiente)

---

## Como Usar

Certifique-se de ter o Docker Compose instalado e execute o seguinte comando para iniciar o projeto:

```bash
docker-compose up
```


Isso iniciará os containers necessários para o projeto. Acesse o School Manager em http://localhost:3000 no navegador.

## Variáveis de Ambiente
O School Manager utiliza variáveis de ambiente para configurações todas estão no docker-compose.yml.

VITE_ROUTE_PUT: Esta variável controla a habilitação ou desabilitação da rota de atualização de dados. Defina como true para habilitar e false para desabilitar.

```plaintext
VITE_ROUTE_PUT=true
```
Após alterar essa variável, lembre-se de reconstruir os containers Docker:

```bash
docker-compose up --build
```
