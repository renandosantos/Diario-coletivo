# Diário Coletivo

![Logo do Diário Coletivo](toughts/public/img/toughts_logo.png)

## 💡 Sobre o Projeto

Diário Coletivo é uma aplicação web completa desenvolvida em Node.js com o padrão MVC (Model-View-Controller). A plataforma permite que os usuários criem contas, façam login e compartilhem seus pensamentos publicamente. Cada usuário tem um dashboard exclusivo para gerenciar, editar e excluir suas próprias publicações.

Este projeto foi criado como parte dos meus estudos em desenvolvimento back-end, aplicando conceitos de autenticação, sessões, ORM com Sequelize e renderização de views com Handlebars.

---

## ✨ Funcionalidades Principais

* **Autenticação de Usuários:** Sistema completo de registro e login com senhas criptografadas.
* **CRUD de Pensamentos:** Os usuários podem Criar, Ler, Atualizar e Deletar seus pensamentos.
* **Dashboard Individual:** Cada usuário possui uma página para visualizar e gerenciar todos os seus pensamentos de forma organizada.
* **Feed Público:** Página inicial que exibe os pensamentos de todos os usuários.
* **Busca e Ordenação:** Funcionalidade para buscar pensamentos por palavras-chave e ordená-los por mais novos ou mais antigos.
* **Mensagens Flash:** Feedback visual para o usuário após ações como criar, editar ou remover um pensamento.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias:

* **Back-end:**
    * [Node.js](https://nodejs.org/en/)
    * [Express](https://expressjs.com/pt-br/)
    * [Sequelize](https://sequelize.org/) (ORM para MySQL)
    * [Express-Session](https://expressjs.com/en/resources/middleware/session.html) para gerenciamento de sessões
    * [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) para criptografia de senhas
* **Front-end (View Engine):**
    * [Handlebars](https://handlebarsjs.com/)
* **Banco de Dados:**
    * [MySQL](https://www.mysql.com/)

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em sua máquina local.

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/diario-coletivo.git](https://github.com/seu-usuario/diario-coletivo.git)

# 2. Navegue até o diretório do projeto
cd diario-coletivo/toughts

# 3. Instale as dependências
npm install

# 4. Configure a conexão com o banco de dados
# Crie um arquivo 'config.js' na raiz do projeto
# e adicione sua senha do MySQL, como no exemplo abaixo:
#
# module.exports = {
#   senha: 'SUA_SENHA_AQUI'
# };
#
# O arquivo conn.js fará a importação dessa configuração.

# 5. Inicie o servidor
npm start
```

Após executar os comandos, a aplicação estará disponível em `http://localhost:5000`.

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.