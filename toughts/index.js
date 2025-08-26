// 1. IMPORTS PRINCIPAIS
// (Express, Handlebars, Conexão com DB, etc.)
const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')
const port = 5000

// 2. IMPORTAÇÃO DOS MÓDULOS MVC
// (Models e Rotas)


// 3. CONFIGURAÇÕES DO APP
// (Inicialização do App, formulários, pasta 'public' e View Engine)
const app = express()


// 4. ROTAS
// (O App "usa" as rotas importadas aqui)


// 5. SERVIDOR
// (Conecta ao banco e liga o site)
app.listen(5000)