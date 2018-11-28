import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Typography from '@material-ui/core/Typography';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Typography color="inherit">
        <Main />
      </Typography>
    </div>
  </div>
)

export default App;
