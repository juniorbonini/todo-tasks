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
