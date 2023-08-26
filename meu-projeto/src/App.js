import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'

function App() {
  const n = "Paulo"
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Pablo"/>
      <SayMyName nome="João"/>
      <SayMyName nome={n}/>
      <Pessoa nome="Rodrigo" idade="21" foto="" profissao="Marceneiro" />
      <List />
    </div>
  );
}

export default App;
