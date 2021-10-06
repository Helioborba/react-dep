import './App.css';
import React,{useState} from 'react';
import Conteudo from './components/Conteudo/Conteudo';
import Wrapper from './components/helpers/Wrapper';
import Menu from './components/Menu/Menu';
import myData from './data.json';
import Form from './components/Form/Form'
function App() {
  
  const [conteudoAtual1, setConteudoAtual1] = useState(myData.set1);
  const [editorMode, setEditorMode] = useState(false);
  

  const editorHandler = event => {
    event.preventDefault();
    setEditorMode(() => {
      return (<Form></Form>)
    })
  }
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
            <Menu editorHandler={editorHandler} conteudoHandler={conteudoAtualHandler1}></Menu>
            <Conteudo editor={editorMode} dados={conteudoAtual1}></Conteudo>
          </div>
        </main>
      </div>
    </Wrapper>
  );
}

export default App;
