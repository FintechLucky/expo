import React, { Component } from 'react';
import '../css/Main.css'

class main extends Component {
    render() {
        return (
            <div className='containermain'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='AppNamemain'>Fin Pay</span>
                </div>
                <img className='line' src={require('../img/substract.png').default} alt='talkimg' />
            </div>
        );
    }
}
export default main;