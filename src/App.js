import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import login from './inc/login';
import main from './inc/main'
import CallbackKakao from './inc/callbackKakao';
import qrcode from './inc/qrcode';
import qrmethod1 from './inc/qrmethod1';
import qrmethod2 from './inc/qrmethod2';
import paynew from './inc/paynew';
import beforefs from './inc/beforefs';

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
            <Route path="/main/beforefs" component={beforefs} exact/>
            <Route path="/callback/kakao" component={CallbackKakao} exact/>
            <Route path="/qrcode" component={qrcode} exact/>
            <Route path="/qrcode/qrmethod1" component={qrmethod1} exact/>
            <Route path="/qrcode/qrmethod2" component={qrmethod2} exact/>
            <Route path="/pay/new" component={paynew} exact/>
          </Router>
        </div>
    )
  }
}

export default App;
