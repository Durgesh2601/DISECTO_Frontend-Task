import './App.css';
import { Products } from './Components/Products';
import { SearchBar } from './Components/SearchBar';

function App() {
  return (
    <div className="App">
    <SearchBar/>
    <Products/>
    </div>
  );
}

export default App;
