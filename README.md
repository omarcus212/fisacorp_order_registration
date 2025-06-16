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

git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

```

```bash

docker-compose up -d
docker exec -it backend-api php artisan migrate
docker exec -it backend-api php artisan migrate:fresh --seed

```