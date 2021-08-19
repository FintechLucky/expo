import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import login from './inc/login';
import main from './inc/main'
import CallbackKakao from './inc/callbackKakao';
import qrcode from './inc/qrcode';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  render() {
    return(
        <div className='App'>
          <Router>
            <Route path="/" component={login} exact/>
            <Route path="/main" component={main} exact/>
            <Route path="/callback/kakao" component={CallbackKakao} exact/>
            <Route path="/qrcode" component={qrcode} exact/>
          </Router>
        </div>
    )
  }
}

export default App;
