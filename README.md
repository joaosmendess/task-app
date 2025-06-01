# TaskApp 📱

Um aplicativo de gerenciamento de tarefas desenvolvido com React Native e Expo.

## 🚀 Funcionalidades

- ✨ Criação e gerenciamento de tarefas
- 📋 Lista de tarefas com status (concluída/pendente)
- 📊 Estatísticas de produtividade
- 🗂️ Categorização de tarefas
- 👤 Perfil do usuário
- ⚙️ Configurações personalizáveis
- 📱 Interface moderna e intuitiva

## 🛠️ Tecnologias Utilizadas

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- Formik & Yup
- React Native Vector Icons

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:
```bash
cd TaskApp
npm install
```

3. Inicie o projeto:
```bash
npx expo start
```

## 📱 Como Usar

1. **Tela Inicial (Home)**
   - Visualize todas as suas tarefas
   - Adicione novas tarefas
   - Marque tarefas como concluídas
   - Acesse outras funcionalidades através dos ícones no cabeçalho

2. **Adicionar Tarefa**
   - Toque no botão "+" na tela inicial
   - Preencha o título (obrigatório)
   - Adicione uma descrição (opcional)
   - Salve a tarefa

3. **Detalhes da Tarefa**
   - Toque em uma tarefa para ver seus detalhes
   - Marque como concluída/pendente
   - Compartilhe a tarefa
   - Exclua a tarefa

4. **Estatísticas**
   - Visualize seu progresso
   - Acompanhe tarefas concluídas e pendentes
   - Veja sua taxa de conclusão

5. **Categorias**
   - Organize suas tarefas por categorias
   - Visualize tarefas por categoria
   - Adicione novas categorias

6. **Perfil**
   - Visualize suas informações
   - Acesse configurações
   - Gerencie notificações

## 🎨 Interface

O aplicativo possui uma interface moderna e intuitiva, com:
- Cores harmoniosas
- Ícones intuitivos
- Animações suaves
- Feedback visual para ações
- Design responsivo

## 📝 Estrutura do Projeto

```
TaskApp/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── contexts/       # Contextos do React
│   ├── navigation/     # Configuração de navegação
│   ├── screens/        # Telas do aplicativo
│   └── types/          # Definições de tipos TypeScript
├── assets/            # Imagens e recursos
└── App.tsx           # Componente principal
```

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Próximos Passos

- [ ] Implementar autenticação de usuários
- [ ] Adicionar sincronização com backend
- [ ] Implementar notificações
- [ ] Adicionar temas personalizáveis
- [ ] Implementar backup de dados
