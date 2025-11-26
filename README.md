<<<<<<< HEAD
📱 ToDo App — React Native + Expo + TypeScript

Aplicativo simples e funcional de lista de tarefas desenvolvido em React Native, utilizando Expo e Typescript.
O objetivo é demonstrar domínio de estados, componentes, renderização de listas e manipulação de dados no front-end mobile.

✨ Funcionalidades
➕ Adicionar tarefa

O usuário digita uma tarefa no campo de input.

Ao clicar no botão “+”, a tarefa é adicionada à lista imediatamente.

Cada tarefa criada contém:

Texto de descrição.

Um círculo indicando se está concluída.

Botão de lixeira para excluir.

✅ Marcar e desmarcar tarefa

Ao clicar no círculo da tarefa, o status alterna entre:

Pendente → círculo vazio + texto normal.

Concluída → círculo marcado + texto riscado (line-through).

🗑️ Remover tarefa

Em cada item existe um botão de lixeira.

Ao clicar, a tarefa é removida da lista.

A interface atualiza automaticamente.

📊 Contadores dinâmicos

Na parte superior da lista, dois indicadores:

Criadas: quantidade total de tarefas.

Concluídas: quantidade de tarefas marcadas como finalizadas.

Os valores são atualizados em tempo real ao:

Criar tarefas

Marcar/desmarcar

Excluir tarefas

🧠 Estrutura do Estado

As tarefas são armazenadas em um estado no formato:

type Task = {
  id: string;
  description: string;
  done: boolean;
}


Operações utilizam métodos de array como:

map → atualizar status de concluída

filter → remover tarefas

reduce → calcular contadores

🖥️ Componentes Principais
Input + Botão

Campo para digitar a tarefa.

Botão “+” para adicionar.

Lista de Tarefas

Exibe todos os itens criados.

Caso não existam tarefas, é exibida uma mensagem de estado vazio:

"Você ainda não tem tarefas cadastradas.
Crie tarefas e organize seus itens a fazer."

🎨 Interface (Baseada no Figma)

A tela inicial exibe:

Logo da aplicação.

Input e botão de adicionar.

Contadores de tarefas criadas e concluídas.

Lista ou tela de estado vazio.

Estilizações:

Tarefas concluídas: texto riscado e cor diferenciada.

Tarefas pendentes: texto normal + círculo vazio.

Botão de excluir: ícone de lixeira.

🚀 Como executar o projeto
1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo

2. Instale as dependências
npm install


ou

yarn

3. Inicie o projeto com Expo
npx expo start


Use o aplicativo Expo Go no celular para escanear o QR Code e rodar o app.

📁 Estrutura básica do projeto
--Em andamento / 

🛠️ Tecnologias utilizadas

React Native

Expo

TypeScript

React Hooks (useState)

FlatList

Styled Components / StyleSheet (dependendo da implementação)

Vector Icons (lixeira, check, etc.)

📌 Objetivo do projeto

Este app foi criado com fins de estudo e prática dos fundamentos de desenvolvimento mobile com React Native, incluindo:

Manipulação de estado

Renderização de listas

Componentização

Estilização

Lógica de CRUD no front-end

📄 Licença

Este projeto está sob a licença MIT — sinta-se livre para usar e modificar.
=======
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
>>>>>>> 399f061 (Initial commit)
