import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import AppRouter from './router/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

// TODO: Export every component from index
// TODO: remove every nanoid from key in map

function App() {
    return (
        <Provider store={store}>
            <ToastContainer />
            <AppRouter />
        </Provider>
    );
}

export default App;
