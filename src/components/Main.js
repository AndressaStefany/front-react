import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CoffeeShop from './CoffeShop';
import Signin from './Signin';
import Signup from './Signup';
import EditReview from './EditReview';
import AddReview from './AddReview';
import { getCookie } from './Auth/config';

class Main extends Component {
    state = {
        logged: !!getCookie("token")
    };

    changeLog = () => {
        const { changeLogged } = this.props;
        changeLogged(false);
    }

    privateRoutes = [
        <Route exact path='/' component={CoffeeShop} />,
        <Route exact path='/reviews/:id' component={EditReview} />,
        <Route exact path='/add' component={AddReview} />
    ];
    publicRoutes = [
    <Route exact path='/' component={CoffeeShop} />,
    <Route exact path='/signin' render={() => <Signin changeLogged={this.changeLog} />} />,
    <Route exact path='/signup' render={() => <Signup />} />
    ];

    render(){
        return(
            <main>
                <Switch>
                {this.state.logged ? this.privateRoutes : this.publicRoutes}
                </Switch>
            </main>
        )
    }
    
}

export default Main;