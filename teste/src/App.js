import './App.css';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ['React', 'Vue', 'Angular']

  return (
    <div>
      <h1>Renderização de Listas</h1>
      <hr />
      <OutraLista itens={meusItens} />
    </div>
  );
}

export default App;
