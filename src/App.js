import './App.css';
import React,{useState} from 'react';
import Exibir from './components/Exibir/Exibir';
import Wrapper from './components/helpers/Wrapper';
import myData from './data.json';
function App() {
  
  const [conteudoAtual1, setConteudoAtual1] = useState(myData.set1);

  const conteudoAtualHandler1 = value => event => {
    event.preventDefault();
    switch (value) {
      case '1':
        setConteudoAtual1(myData.set1);
        break;
      case '2':
        setConteudoAtual1(myData.set2);
        break;
      case '3':
        setConteudoAtual1(myData.set3);
        break;
      case '4':
        setConteudoAtual1(myData.set4);
        break;
      case '5':
        setConteudoAtual1(myData.set5);
        break;
      case '6':
        setConteudoAtual1(myData.set6);
        break;
      case '7':
        setConteudoAtual1(myData.set7);
        break;
      case '8':
        setConteudoAtual1(myData.set8);
        break;
      case '9':
        setConteudoAtual1(myData.set9);
        break;
      case '10':
        setConteudoAtual1(myData.set10);
        break;
      case 'EDIT':
        setConteudoAtual1(myData.EDIT);
        // Aqui vai virar outro usestate no futuro quando existir a edição
        break;
      default:
        setConteudoAtual1("");
        break;
    }
  }
  return (
    <Wrapper>
      <div className="App">
        <main className="App-main">
          <div className="App-background">
            <div className="App-menu">
                <button onClick={(event) => conteudoAtualHandler1("1")(event)}>
                  <p>Menu</p>
                </button>
                <button onClick={(event) => conteudoAtualHandler1("2")(event)}>
                  <p>Jogos antigos</p>
                </button>
                <button onClick={(event) => conteudoAtualHandler1("3")(event)}>
                  <p>PS2 e outros</p>
                </button>
                <button onClick={(event) => conteudoAtualHandler1("4")(event)}>
                  <p>SNES e outros</p>
                </button>
                <button onClick={(event) => conteudoAtualHandler1("EDIT")(event)}>
                  <p>Editor</p>
                </button>
            </div>
            <div className="App-content">
              <header className="App-content__header">
                <h1>Conteudo</h1>
              </header>
              <Exibir dados={conteudoAtual1}></Exibir>
            </div>
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default App;
