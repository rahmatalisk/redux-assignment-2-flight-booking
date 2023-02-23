
import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Table from './Components/Table';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Table/>
      
    </Provider>
  );
}

export default App;
