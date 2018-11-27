import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CooffeeShop from './CooffeShop';
import About from './About';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CooffeeShop} />
            <Route exact path='/about' component={About} />
        </Switch>
    </main>
)

export default Main;