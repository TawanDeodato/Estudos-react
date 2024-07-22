import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/pessoa';

function App() {

  const name = "JSX"
  const newName = "Tawan".toUpperCase()
  const nome = "José"
  const img = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterando o {name}</h1>
      <h4>Olá, me chamo {newName}</h4>
      <img src={img} alt="Imagem 150x150" />

      <SayMyName nome="Paulo" />
      <SayMyName nome={nome} />
      <Pessoa nome="Rodrigo" idade="29" profissao="Progamador" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
