# 🧾 Order Registration System (Fullstack - Laravel + React + Docker)

Este projeto é um sistema de registro de pedidos, composto por um **backend em Laravel**, um **frontend em React com Vite**, e um **banco de dados MySQL**. Toda a infraestrutura é orquestrada com Docker.

---

## 📦 Tecnologias

- ⚙️ **Backend**: Laravel 11
- 💻 **Frontend**: React 19 + Vite
- 🐬 **Banco de Dados**: MySQL 8
- 🐳 **Ambiente**: Docker + Docker Compose

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash

git clone https://[github.com/seu-usuario/seu-repo.git](https://github.com/omarcus212/fisacorp_order_registration)
cd seu-repo

```
## Configure as variáveis de ambiente e arquivos de configuração

- Antes de subir o ambiente, você precisará configurar as variáveis de ambiente:

* Crie um arquivo .env na raiz do projeto.
* Utilize o arquivo .env.example como base, ele já possui as variáveis definidas para facilitar o - processo.
* Atualize também os arquivos docker-compose.yml e phinx.yml com as informações do seu banco de dados, utilizando as variáveis que você definiu no .env.
* ⚠️ Importante: Verifique se todas as variáveis de ambiente estão corretas antes de seguir para o próximo passo.

## Suba os containers com Docker

- docker-compose up --build -d

## Execute as migrations

- docker-compose run --rm api composer migrate
- Certifique-se de que todas as migrations foram executadas corretamente.
