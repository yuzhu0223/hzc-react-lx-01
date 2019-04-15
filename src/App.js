import React, { Component } from 'react';
import './App.css';
// import { Button } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'

import AppRouter from './router/router'
class App extends Component {
  render() {
    return (
      <div>
        {/* <Button type="primary"/> */}
        <AppRouter></AppRouter>
      </div>
    );
  }
}

export default App;
