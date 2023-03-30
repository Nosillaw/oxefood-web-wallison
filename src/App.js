import { Segment } from 'semantic-ui-react';
import './App.css';
import FormCliente from './views/cliente/FormCliente';

function App() {
  return (
    <div className="App">

      <FormCliente/>

      <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
    </div>
  );
}

export default App;
