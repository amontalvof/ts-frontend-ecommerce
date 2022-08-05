import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import AppRouter from './router/AppRouter';
import { CartProvider } from './context/storageCart';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const queryClient = new QueryClient();

// TODO: Configure Google reCaptcha and login in the cloud

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <CartProvider>
                    <ToastContainer />
                    <AppRouter />
                </CartProvider>
            </Provider>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
        </QueryClientProvider>
    );
}

export default App;
