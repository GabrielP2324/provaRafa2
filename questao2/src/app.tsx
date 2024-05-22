import React from "react";
import ComponenteAbas from "./ComponenteAbas";
import Aba from "./Aba";

function App() {
	return (
		<>
			<ComponenteAbas>
				<Aba titulo="Aba 1">
					<p>Conteúdo da Aba 1</p>
				</Aba>
				<Aba titulo="Aba 2">
					<p>Conteúdo da Aba 2</p>
				</Aba>
				<Aba titulo="Aba 3">
					<p>Conteúdo da Aba 3</p>
				</Aba>
			</ComponenteAbas>
		</>
	);
}

export default App;

