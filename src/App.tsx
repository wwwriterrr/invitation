import { BrowserRouter } from 'react-router-dom';
import { Page } from './components';

export const App = () => {
    return (
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    )
}
