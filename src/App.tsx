import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import AppRouter from './router/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <ToastContainer />
            <AppRouter />
        </Provider>
    );
}

export default App;
