import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { loginRoute, request, saveTokenCookie } from "./Auth/config";
import CoffeeShop from './CoffeShop';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:100,
    marginLeft: 200,
    marginRight: 200 
  },
  formContainer: {
    padding: 15,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexFlow: "column",
    maxWidth: 400,
    minWidth: 290,
    width: "25%"
  },
  form: {
    display: "flex",
    flexFlow: "column"
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class Signin extends Component {
  state = {
    email: "",
    password: "",
    showPassword: false,
  };

  handleSubmit = e => {
    e && e.preventDefault();
    const { email, password } = this.state;
    
    request.post(loginRoute, { email, password }).then(response => {
      saveTokenCookie(response.data.id);
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} onSubmit={this.handleSubmit}>
        <h1>Sign In</h1>
        <TextField
          id="outlined-email-input"
          label="Email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          type="email"
          name="email"
          autoComplete="email"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-adornment-password"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Password"
          style={{marginRight:11}}
          value={this.state.password}
          onChange={this.handleChange('password')}          
          name="password"
          fullWidth
          margin="normal"
          variant="outlined"
          InputProps={{
            shrink: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button 
          type="submit"
          value="Submit"
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={this.handleSubmit}
          render={() => <CoffeeShop />}>
            Sign In
        </Button>
        <Button 
          className='buttomBack'
          variant="contained" 
          color="default" 
          component={ Link } 
          to='/'>
            Back
        </Button>
      </form>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signin);