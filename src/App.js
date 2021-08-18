import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import login from './inc/login';
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
        <BrowserRouter>
          <Route path="/" component={login} exact/>
          <Route path="/qrcode" component={qrcode} exact/>
        </BrowserRouter>
      </div>
      
    )
  }
}

export default App;