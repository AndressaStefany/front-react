import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { loginRoute, request, saveTokenCookie } from "./Auth/config";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    height: "100vh",
    justifyContent: "center",
    width: "100vw"
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
  input: {
    marginBottom: 5,
    marginTop: 5
  }
});

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = state => event => {
    this.setState({
      [state]: event.target.value
    });
  };

  submit = e => {
    e && e.preventDefault();
    const { email, password } = this.state;
    
    request.post(loginRoute, { email, password }).then(response => {
        console.log(response.data.id);
      saveTokenCookie(response.data.id);
    });
  };

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.formContainer}>
          <form onSubmit={this.submit} className={classes.form}>
            <TextField
              required={true}
              autoFocus={true}
              className={classes.input}
              label="Email"
              placeholder="email@email.com"
              value={this.state.email}
              onChange={this.handleChange("email")}
            />
            <TextField
              required={true}
              className={classes.input}
              label="Senha"
              placeholder="********"
              value={this.state.password}
              type="password"
              onChange={this.handleChange("password")}
            />
            <input style={{ display: "none" }} type="submit" />
          </form>
          <Button
            className={classes.input}
            onClick={this.submit}
            variant="contained"
            color="primary"
            type="submit"
          >
            Entrar
          </Button>
        </div>
    );
  }
}

export default withStyles(styles)(Login);