# Introdução ao React e aos arquivos TSX

Para compilar esse projeto, basta ter o Node.js e o TypeScript instalados, e
executar o comando `npm i`, para instalar as dependências e, em seguida,
executar o comando `tsc`, que criará a pasta `public/js` com o arquivo
`main.js`, que é **o** script principal da página.

Os arquivos originais que devem ser editados são os arquivos `tsx` que estão na
pasta `src`, além dos arquivos `public/css/main.css` e `index.html`.

Com o arquivo `public/js/main.js` gerado, basta abrir um servidor qualquer, como
o `Live Server`, abrir o arquivo `index.html` no navegador, e ver a página sendo
renderizada em tempo real!

Toda a informação relevante está na forma de comentários localizados dentro dos
respectivos arquivos. No caso dos arquivos `tsx`, o arquivo incial/principal é o
arquivo `src/index.tsx`.

> As dependências instaladas pelo comando `npm i` não são dependências de script
> ou coisa do tipo, mas apenas a definição de tipos, para que o TypeScript
> consiga validar e compilar corretamente os arquivos `tsx`. **O** React de
> verdade foi adicionado via tags `script` normais, e os arquivos `js` do React
> foram baixados aqui: https://reactjs.org/docs/add-react-to-a-website.html

--------------------------------------------------------------------------------

# Mais referências

React Docs - Hello World
https://reactjs.org/docs/hello-world.html

React Docs - Introducing JSX
https://reactjs.org/docs/introducing-jsx.html

React Docs - Rendering Elements
https://reactjs.org/docs/rendering-elements.html

TypeScript Docs - JSX
https://www.typescriptlang.org/docs/handbook/jsx.html

React Docs - Introducing Hooks
https://reactjs.org/docs/hooks-intro.html
