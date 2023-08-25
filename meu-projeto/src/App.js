import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const n = "Paulo"
  return (
    <div className="App">
      <SayMyName nome="Pablo"/>
      <SayMyName nome="João"/>
      <SayMyName nome={n}/>
      <Pessoa nome="Rodrigo" idade="21" foto="https://youtube.com" profissao="Marceneiro" />
    </div>
  );
}

export default App;
