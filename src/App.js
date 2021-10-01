import './App.css';
import React from 'react';
import Exibir from './components/Exibir/Exibir';
function App() {
  const dados = [
    {
      id: "1",
      nome: "Francisco",
      idade: "14"
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-background">
          <div className="App-menu">
            <p>hello</p>
          </div>
          <div className="App-content">
            <Exibir dados={dados}></Exibir>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
