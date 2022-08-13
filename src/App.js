import { Route } from 'react-router';
import { MainPage } from './components/MainPage';

export const App = () => {
    return (
        <Route exact path='/' component={MainPage} />
    );
}