import { Segment } from 'semantic-ui-react';
import './App.css';
import MenuSistema from './MenuSistema';
import Rotas from './Rotas';

function App() {
  return (
    <div className="App">
      
      <MenuSistema />

      <Rotas />
      
      <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2023 - Projeto WEB III - IFPE Jaboatão dos Guararapes
        </Segment>
    </div>
  );
}

export default App;
