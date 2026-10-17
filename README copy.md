# Projeto Minha Biblioteca

Aplicativo móvel de biblioteca feito com React Native, TypeScript e Expo Router.

## O que está incluído

- Tela inicial
- Catálogo com quatro livros de exemplo
- Pesquisa por título
- Ordenação alfabética
- Tela de detalhes de cada livro
- Filtro por categoria
- Indicação de livro disponível ou emprestado
- Tela inicial com ícones, livros em destaque e empréstimos com datas de exemplo
- Categorias com imagens representativas
- Comunidade com resenhas, hashtags, curtidas e criação de publicação (em memória)
- Navegação inferior na ordem solicitada
- Imagem local para a tela inicial

## Antes de começar

Instale:
1. Node.js (versão LTS) no site https://nodejs.org/
2. Visual Studio Code
3. No celular, instale o aplicativo Expo Go pela loja oficial, se quiser testar no celular.

## Como abrir e executar

1. Extraia o arquivo ZIP.
2. Abra o VS Code.
3. Clique em **Arquivo > Abrir Pasta** e selecione a pasta `biblioteca-app`.
4. Abra **Terminal > Novo Terminal**.
5. Confira se Node e npm estão instalados:
   ```bash
   node -v
   npm -v
   ```
6. Instale as dependências:
   ```bash
   npm install
   ```
7. Inicie o aplicativo:
   ```bash
   npx expo start
   ```
8. Para testar no celular, conecte o computador e o celular à mesma rede Wi-Fi, abra o Expo Go e escaneie o QR Code exibido no terminal/navegador.
9. Para abrir no navegador, pressione `w` no terminal depois de iniciar o Expo. Se necessário, instale as dependências de web com:
   ```bash
   npx expo install react-dom react-native-web
   ```

## Se der erro

- Pare o servidor com `Ctrl + C`.
- Limpe o cache e reinicie:
  ```bash
  npx expo start -c
  ```
- Se aparecer aviso de dependências incompatíveis:
  ```bash
  npx expo install --fix
  ```
- As capas dos livros são carregadas da internet; confira a conexão.
- A imagem da tela inicial já está incluída em `assets/images/inicio.jpg`.

## Limitações desta versão

O catálogo usa dados de exemplo em `data/livros.ts`. As datas de empréstimo são exemplos fictícios para a interface. As publicações e curtidas do chat funcionam durante a execução, mas não são salvas quando o aplicativo é fechado, pois não há banco de dados. A tela Usuário é apenas uma tela inicial.

## Pastas principais

- `app/`: telas e rotas
- `components/`: componentes reutilizados
- `data/livros.ts`: dados de exemplo dos livros
- `assets/images/`: imagem usada na tela inicial
