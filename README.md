# 💡 IdeaBox

O IdeaBox é um aplicativo mobile desenvolvido em React Native com Expo, criado para permitir que os usuários registrem, visualizem, editem e excluam suas ideias de forma simples.

O projeto foi desenvolvido como atividade prática de desenvolvimento mobile, utilizando o AsyncStorage para garantir a persistência dos dados mesmo após o fechamento do aplicativo.

---

## 👩‍💻 Integrante

- Melissa Gabrielly de Freitas

---

## 🎯 Objetivo do projeto

O objetivo do IdeaBox é oferecer um espaço simples para guardar ideias que podem surgir no dia a dia, evitando que elas sejam esquecidas.

O usuário pode criar uma conta, fazer login e cadastrar suas próprias ideias, organizando cada uma por categoria.

---

## 🛠️ Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- React Navigation
- AsyncStorage
- VS Code

---

## 📱 Funcionalidades

### 👤 Cadastro e login

- Criação de uma conta com nome, e-mail e senha.
- Login utilizando os dados cadastrados.
- Cada usuário possui suas próprias ideias.

### 💡 Gerenciamento de ideias

O usuário pode:

- Criar uma nova ideia.
- Visualizar suas ideias.
- Ver os detalhes de uma ideia.
- Editar uma ideia.
- Excluir uma ideia.
- Organizar ideias por categoria.

### 💾 Persistência de dados

As informações são armazenadas utilizando o **AsyncStorage**, permitindo que os dados continuem disponíveis mesmo depois que o aplicativo seja fechado e aberto novamente.

---

## 📋 Dados armazenados

### Usuários

Cada usuário possui:

- `id`
- `nome`
- `email`
- `senha`

### Ideias

Cada ideia possui:

- `id`
- `usuarioId`
- `titulo`
- `descricao`
- `categoria`

O campo `usuarioId` é utilizado para relacionar cada ideia ao usuário que a cadastrou.

---

## 🔄 Operações CRUD

O aplicativo implementa as quatro operações principais do CRUD:

| Operação | Funcionalidade |
|----------|----------------|
| Create | Cadastrar uma nova ideia |
| Read | Visualizar ideias cadastradas |
| Update | Editar uma ideia |
| Delete | Excluir uma ideia |

---

## 📂 Estrutura do projeto

```text
IdeaBox/
│
├── assets/
│   └── logo.png
│
├── src/
│   ├── components/
│   │   ├── CartaoIdeia.js
│   │   └── EstadoVazio.js
│   │
│   ├── navigation/
│   │   └── AppNavigator.jsx
│   │
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── CadastroScreen.js
│   │   ├── HomeScreen.js
│   │   ├── NovaIdeiaScreen.js
│   │   ├── DetalhesIdeiaScreen.js
│   │   ├── EditarIdeiaScreen.js
│   │   └── PerfilScreen.js
│   │
│   └── services/
│       └── storage.js
│
├── App.js
├── package.json
└── app.json
