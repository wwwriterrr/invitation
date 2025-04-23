import { BrowserRouter } from 'react-router-dom';
import { Page } from './components';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { AuthHOC } from './HOC';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AuthHOC>
                    <Page />
                </AuthHOC>
            </BrowserRouter>
        </Provider>
    )
}
