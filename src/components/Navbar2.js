import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
    signButton: {
        paddingRight: 50,
    }
};

class Navbar2 extends Component{
    render(){
        return (
            <div className={styles.root}>
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={styles.grow}>
                    Cooffe Shop
                    </Typography>

                    <div className={styles.signButton}>
                        <Button color="inherit">Sign in</Button> 
                    </div>
                           
                    <Button color="inherit">Sign up</Button>
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar2;