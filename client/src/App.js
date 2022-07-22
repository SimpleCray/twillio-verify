import './scss/app.scss';
import { Route, Router, Switch } from 'react-router-dom';
import history from './@history';
import { Fragment } from 'react';
import Message from './components/shared/Message';
import Home from './components/pages/Home';

function App() {

    return (
        <Fragment>
            <Router history={history}>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <Message />
        </Fragment>
    );
}

export default App;
