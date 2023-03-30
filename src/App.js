import { Segment } from 'semantic-ui-react';
import './App.css';
import FormProduto from './views/produto/FormProduto';

function App() {
  return (
    <div className="App">

      <FormProduto/>

      <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
    </div>
  );
}

export default App;
