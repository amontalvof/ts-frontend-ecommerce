import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/store';
import AppRouter from './router/AppRouter';

function App() {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
}

export default App;
