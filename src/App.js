import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Typography from '@material-ui/core/Typography';

const App = () => (
  <Typography color="inherit">
    <Navbar />
    <div className="container">
        <Main />
    </div>
  </Typography>
)

export default App;
