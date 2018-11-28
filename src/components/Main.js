import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CoffeeShop from './CoffeShop';
import About from './About';
import Signin from './Signin';
import Signup from './Signup';
import EditReview from './EditReview';
import AddReview from './AddReview';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={CoffeeShop} />
            <Route exact path='/about' component={About} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/reviews/:id' component={EditReview} />
            <Route exact path='/add' component={AddReview} />
            
        </Switch>
    </main>
)

export default Main;