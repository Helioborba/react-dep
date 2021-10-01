import './App.css';
import React from 'react';
import Exibir from './components/Exibir/Exibir';
function App() {
  const dados = [
    {
      id: "1",
      titulo: "GTA San Andreas:",
      conteudo: "Um jogo clássico de PS2 feito pela Rockstar games"
    },
    {
      id: "2",
      titulo: "Terraria:",
      conteudo: "Um jogo sandblox desenvolvido pela Relogic"
    }
  ]
  return (
    <div className="App">
      <main className="App-main">
        <div className="App-background">
          <div className="App-menu">
            <div>
              <p>Menu</p>
            </div>
            <div>
              <p>Melhores dos 90's</p>
            </div>
            <div>
              <p>Só o filé de 2010</p>
            </div>
            <div>
              <p>Aquelas que a gente não esqueçe</p>
            </div>
          </div>
          <div className="App-content">
            <header className="App-content__header">
              <h1>Conteudo</h1>
            </header>
            <Exibir dados={dados}></Exibir>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
