import {Route} from 'react-router';
import { Layout } from './components/Layout';
import { MainPage } from './components/MainPage';


export const App = () => {
    
    return (
        <Layout>
            <Route exact path='/' component={MainPage} />
        </Layout>
    );
}