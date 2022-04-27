import './App.css';
import { Homepage } from './Components/Home';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App">
    <Homepage/>
    </div>
    </ChakraProvider>
  );
}

export default App;
