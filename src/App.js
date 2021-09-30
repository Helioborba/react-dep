import './App.css';
import React from 'react';
import Exibir from './components/Exibir/Exibir';
function App() {
  const dados = [
    {
      id: "1",
      nome: "Francisco",
      idade: "14"
    },
    {
      id: "2",
      nome: "Antonio",
      idade: "24"
    },
    {
      id: "3",
      nome: "Augusto",
      idade: "34"
    },
    {
      id: "4",
      nome: "Roberto",
      idade: "44"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>Mensagem</p>
        <Exibir dados={dados}></Exibir>
      </header>
    </div>
  );
}

export default App;
