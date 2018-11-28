import React from 'react';
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

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

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
          className={classes.button}>
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