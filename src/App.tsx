import { BrowserRouter } from 'react-router-dom';
import { Page } from './components';
import './App.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    )
}
