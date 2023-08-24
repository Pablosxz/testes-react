import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = "Pablo"
  const nameUpper = name.toUpperCase()
  const age1 = 20
  const age2 = 21
  const url = "https://img.freepik.com/fotos-gratis/close-up-no-lindo-gato_23-2149216326.jpg"

  function soma (age1, age2){
    return age1 + age2
  }

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá {nameUpper}</p>
      <p>Soma = {soma(age1, age2)}</p>
      <img src={url} alt="gato"/>
      <HelloWorld />
    </div>
  );
}

export default App;
