import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import login from './inc/login';
import qrcode from './inc/qrcode';
import qrmethod1 from './inc/qrmethod1';
import qrmethod2 from './inc/qrmethod2';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }

  render() {
    return(
      <div className='App'>
        <BrowserRouter>
          <Route path="/" component={login} exact/>
          <Route path="/qrcode" component={qrcode} exact/>
          <Route path="/qrcode/qrmethod1" component={qrmethod1} exact/>
          <Route path="/qrcode/qrmethod2" component={qrmethod2} exact/>
        </BrowserRouter>
      </div>
      
    )
  }
}

export default App;