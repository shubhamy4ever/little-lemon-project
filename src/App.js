import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <ChakraProvider>
    <div id='grid-container-app'>
      <HomePage />
    </div>
    </ChakraProvider>
  );
}

export default App;
