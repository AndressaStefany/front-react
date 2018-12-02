import React,{ Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { deleteTokenCookie,getCookie } from './Auth/config';
import '../App.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Navbar extends Component {
  state = {
    logged: !!getCookie("token")
  };

  changeLog = () => {
    deleteTokenCookie();
    window.location.reload();
  }
  
  render(){
    return (
      <div className={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={styles.grow}>
            <Link className='linkNavbar' to='/'>Coffe Shop</Link>
            </Typography>
            
            {!this.state.logged && <Link className='linkNavbar' to='/signin' button>
              <ListItem button>
                  Sign In
              </ListItem>
            </Link>}
          
            {!this.state.logged && <Link className='linkNavbar' to='/signup' button>
              <ListItem button>            
                  Sign Up
              </ListItem>
            </Link>}

            {this.state.logged && 
              <Button 
                className='linkNavbar'
                onClick={this.changeLog}>
                Sign Out
              </Button>
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default Navbar;