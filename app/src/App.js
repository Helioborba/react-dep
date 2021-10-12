import './App.css';
import React,{Fragment, useState} from 'react';
import ReactDOM from 'react';
import Conteudo from './components/Conteudo/Conteudo';
import Menu from './components/Menu/Menu';
import myData from './data.json';
import FormEditor from './components/Form/FormEditor'

function App() {
  
  const [conteudoAtual1, setConteudoAtual1] = useState(myData.set1); //  !apenas um mock! > Hook provisorio experando integracao com api
  const [editorMode, setEditorMode] = useState(false); // Hook provisorio enquanto nao a um metodo mais eficiente
  

  const editorHandler = event => {
    event.preventDefault();
    // Tem que melhorar essa lógica abaixo ; o render do form não devia ser uma variável pra checagem também (checar form para melhor explicacao)
    setEditorMode(() => {
      if (editorMode === false) {
        return (<FormEditor setConteudoAtual={setConteudoAtual1} setEditorMode={setEditorMode}></FormEditor>);
      } else {
        return false;
      }
    })
  }
  const conteudoAtualHandler1 = value => event => {
    event.preventDefault();
    setEditorMode(false); // Serve para checar se o modo de edição está ativo, no caso ele vai retirar o editor sempre que um botao for ativado
    // Esse switch case absurdo e temporario enquanto nao ha integracao com api
    // os dados estao sendo puxados de uma file json ja para melhor compreensao do futuro
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
      default:
        setConteudoAtual1("");
        break;
    }
  }
  return (
    <Fragment>
      <div className="App">
        <main className="App-main">
          <div className="App-background">
            <Menu editorHandler={editorHandler} conteudoHandler={conteudoAtualHandler1}></Menu>
            <Conteudo editor={editorMode} dados={conteudoAtual1}></Conteudo>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default App;
