import './App.css';
import { Routes, Route } from "react-router-dom";
import { Homepage } from './Components/Homepage';
import { Products } from './Components/Products';
import { SearchBar } from './Components/SearchBar';
import { Review } from './Components/Review';

function App() {
  return (
    <div className="App">
    <Homepage/>
    <Routes>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/search' element={<SearchBar/>}></Route>
      <Route path="/products/:id" element={<Review/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
