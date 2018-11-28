import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop:100,
    marginLeft: 200,
    marginRight: 200 
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});

class Signup extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root}>
        <h1>Sign Up</h1>
        <TextField
          id="outlined-name"
          label="Name"
          onChange={this.handleChange('name')}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
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
        <Button variant="contained" color="primary" className={classes.button}>
            Sign Up
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

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);