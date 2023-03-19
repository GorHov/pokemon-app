import { Provider } from 'react-redux';
import PokemonList from './components/PokemonList';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );
}

export default App;
