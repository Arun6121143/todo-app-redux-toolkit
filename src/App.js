import { Provider } from 'react-redux';
import './App.css';
import AddButton from './component/AddButton';
import Appbar from './component/Appbar';
import DisplayTodo from './component/DisplayTodo';
import store from './component/features/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Appbar></Appbar>
      <AddButton></AddButton>
      <DisplayTodo></DisplayTodo>
    </div>
    </Provider>
  );
}

export default App;
