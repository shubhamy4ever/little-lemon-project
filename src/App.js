import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import AlertToast from './common/AlertToast';
import Loader from './common/Loader';


function App() {
  return (
    <>
      <ChakraProvider>
        <div id='grid-container-app'>
          <HomePage />
        </div>
        <Loader />
        <AlertToast />
      </ChakraProvider>
    </>
  );
}

export default App;
