import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import AppRouter from './router/AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { CartProvider } from './context/storageCart';

// TODO: Refactor to use react-query

function App() {
    return (
        <Provider store={store}>
            <CartProvider>
                <ToastContainer />
                <AppRouter />
            </CartProvider>
        </Provider>
    );
}

export default App;
