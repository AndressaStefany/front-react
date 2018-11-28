import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CoffeeShop from './CoffeShop';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CoffeeShop} />
            <Route exact path='/about' component={About} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
        </Switch>
    </main>
)

export default Main;