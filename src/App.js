import React,{ Component, Fragment } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Typography from '@material-ui/core/Typography';
import { getCookie } from "./components/Auth/config";

const LoggedContext = React.createContext({
    logged: false,
})

class App extends Component {
    state = {
        logged: !!getCookie("token"), //true or false
    }

    changeLogged = value => this.setState({ logged: !!value });

    render(){
        const value = {
            ...this.state,
            ...this.changeLogged
        }

        return(
            <LoggedContext.Provider value={value}>
                <LoggedContext.Consumer>
                    {
                        ({changeLogged,logged}) => (
                            <Fragment>
                                <Typography color="inherit">
                                <Navbar {...{changeLogged,logged}}/>
                                <div className="container">
                                    <Main {...{changeLogged}}/>
                                </div>
                                </Typography>
                            </Fragment>
                        )
                    }
                </LoggedContext.Consumer>
            </LoggedContext.Provider>

        )
    }
  
}

export default App;