import React,{ Component } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Typography from '@material-ui/core/Typography';
import { getCookie } from "./components/Auth/config";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: !!getCookie("token"), //true or false
        };
    }

    changeLogged = value => this.setState({ logged: !!value });

    render(){
        return(
            <Typography color="inherit">
            <Navbar key="Navbar" logged={this.state.logged} changeLogged={this.changeLogged}/>
            <div className="container">
                <Main />
            </div>
        </Typography>

        )
    }
  
}

export default App;