import React from 'react';
import './App.css';
import Theme from './utils/Theme';

import {
  Login
} from './pages'

function App() {
  return (
    <Theme>
      <div className="App">
        <Login />
      </div>
    </Theme>
  );
}

export default App;
