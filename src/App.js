import {Route} from 'react-router';
import { Layout } from './components/Layout';
import { MainPage } from './components/MainPage';
import {RegisterPage} from "./components/RegisterPage";


export const App = () => {
    
    return (
        <Layout>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/Register' component={RegisterPage} />
        </Layout>
    );
}