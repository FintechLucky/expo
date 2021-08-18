import React, { Component } from 'react';
import '../css/Login.css'

class login extends Component {
    render() {
        return (
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='AppName'>F i n     P a y</span>
                    <span className='subTitle'>쉬 운  정 산,  빠 른  송 금</span>
                </div>
                <button className='LoginBtn'>
                    <img className='Loginimg' src={require('../img/talk.png').default} alt='talkimg' />
                    <span className='LoginText'>카카오톡으로 로그인</span>
                </button>
            </div>
        );
    }
}
export default login;