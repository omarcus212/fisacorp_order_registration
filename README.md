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

git clone https://github.com/omarcus212/fisacorp_order_registration
cd fisacorp_order_registration

```
## Configure as variáveis de ambiente e arquivos de configuração

- Antes de subir o ambiente, você precisará configurar as variáveis de ambiente:

* Crie um arquivo .env na raiz do projeto.

* Adicione as seguintes linhas ao arquivo .env:
DB_DATABASE=db_order_registration
DB_USERNAME=root
DB_PASSWORD=

* Crie um arquivo .env na raiz da pasta api.

* Adicione as seguintes linhas ao arquivo .env:
- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1 ou backend-mysql(Docker)
- DB_PORT=3306
- DB_DATABASE=db_order_registration
- DB_USERNAME=root
- DB_PASSWORD=

* Utilize o arquivo .env.example como base, ele já possui as variáveis definidas para facilitar o - processo.

* Atualize também os arquivos docker-compose.yml e phinx.yml com as informações do seu banco de dados, utilizando as variáveis que você definiu no .env.

* ⚠️ Importante: Verifique se todas as variáveis de ambiente estão corretas antes de seguir para o próximo passo.

## Suba o projeto local

# Projeto [Nome do Projeto]

1. Entre na pasta do backend:
```bash
cd api
```

2. Instale as dependências PHP:
```bash
composer install
```

3. Gere a key do Laravel:
```bash
php artisan key:generate
```

4. Rode as migrations:
```bash
php artisan migrate
```

5. Rode os seeders:
```bash
php artisan db:seed
```

6. Inicie o servidor:
```bash
composer start
```

```bash
O backend estará rodando em http://127.0.0.1:8000
```

----------------------------------------
💻 Frontend (React + Vite)

1. Acesse a pasta do frontend:
```bash
cd ../web
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

```bash
O frontend estará rodando em http://localhost:5173
```

----------------------------------------
📝 Observações

- É recomendado rodar este projeto fora do Docker durante o desenvolvimento local.
- Certifique-se de que os arquivos .env estejam configurados corretamente e que o backend consiga se comunicar com o banco.

## Suba o projeto com Docker (opção menos recomendada)

> ⚠️ Esta opção é menos recomendada para desenvolvimento local, pois pode apresentar lentidão nas requisições, principalmente em ambientes como Windows ou Mac, devido ao uso de volumes e limitações de desempenho do Docker Desktop.

* executar o composer install na api e voltar para a pasta raiz do projeto. (fisacorp_order_registration)

```bash
cd api
composer install
cd .. 
```

1. na pasta raiz do projeto execute o comando abaixo:
```bash
- docker-compose up --build -d
  ```

2. Gere a key do Laravel
```bash
- docker exec -it backend-api php artisan key:generate
```

## Execute as migrations e seeders

3. Execute as migrations
```bash
- docker exec -it backend-api php artisan migrate
```

- Certifique-se de que todas as migrations e seeders foram executadas corretamente.

- Caso você precise recriar o banco de dados e todas as tabelas do zero, execute:
```bash
docker exec -it backend-api php artisan migrate:fresh
```

4. Execute os seeders
```bash
- docker exec -it backend-api php artisan migrate --seed
```



```bash
O frontend estará rodando em http://localhost:5173
```
```bash
O backend estará rodando em http://localhost:8000
```
```bash
O banco estará rodando em http://localhost:3307
```

----------------------------------------
📄 Documentação

- 🖌️ Figma (UI/UX): [Ver no Figma](https://www.figma.com/design/xZbhZB0YoqMnEct60AQFMX/Untitled?node-id=0-1&t=BRMcVjIBOmPnqMJR-1)
- 📬 API (Postman): [Coleção no Postman](https://documenter.getpostman.com/view/21065723/2sB2xBDADW)

----------------------------------------
⏱️ Tempo de desenvolvimento

Este projeto foi desenvolvido em aproximadamente **110 horas**, incluindo:

- Backend (Laravel):28 horas
- Frontend (React): 68 horas
- Testes e ajustes: 19 horas

----------------------------------------
👤 Autor

Marcus Vinnicius  
https://github.com/seu-usuario

----------------------------------------
✅ Licença

Este projeto está licenciado sob a licença **MIT**.
