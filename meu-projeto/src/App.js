import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'

function App() {
  const n = "Paulo"
  return (
    <div className="App">
      <h1>Testanto CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Pablo"/>
      <SayMyName nome="João"/>
      <SayMyName nome={n}/>
      <Pessoa nome="Rodrigo" idade="21" foto="" profissao="Marceneiro" />
    </div>
  );
}

export default App;
