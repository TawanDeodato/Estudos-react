import './App.css';

function App() {

  const name = "JSX"
  const newName = "Tawan".toUpperCase()
  const img = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Alterando o {name}</h1>
      <h4>Olá, me chamo {newName}</h4>
      <img src={img} alt="Imagem 150x150" />
    </div>
  );
}

export default App;
