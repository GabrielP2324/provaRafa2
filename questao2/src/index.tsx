// Diferente do que se encontra em alguns tutoriais na Internet, não precisamos
// "importar" nada aqui, pois estamos usando TypeScript puro, sem ferramentas ou tradutores
// intermediários, como webpack ou Babel.
//
// Os arquivos do React.js estão localizados na pasta /public/lib/react, e estamos explicando
// para o TypeScript sobre a existência global dos tipos do React.js através das dependências
// de desenvolvimento, "devDependencies", especificadas no arquivo package.json
//
// Esse modelo, apesar de funcionar para nosso caso simples, impõe muitas limitações para
// uma aplicação real! Ainda assim, é uma forma de começar! :)

import ReactDOM from "react-dom";
import App from "./app";
import React from "react";

ReactDOM.render(
	// O componente react.StrictMode não produz nenhuma saída visível, apenas ativa uma série
	// de verificações e validações (quando utilizados os scripts de desenvolvimento) para os
	// filhos, que no nosso caso é o aplicativo todo!
	// https://reactjs.org/docs/strict-mode.html
	<React.StrictMode>
		<App />
	</React.StrictMode>,

	// O segundo parâmetro do método render() indica dentro de qual elemento da
	// página a aplicação será efetivamente renderizada.
	document.getElementById("root")
);
