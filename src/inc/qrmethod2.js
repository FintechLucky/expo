import React, { Component } from 'react';
import '../css/QRMethod.css'

class qrmethod2 extends Component {
    render() {
        return (
            <div className='container'>
                <img className='pagemark' src={require('../img/pagemark2.png').default} alt='talkimg' />
                <span className='commentmethod1'>카카오톡 프로필에서 송금 QR 코드</span>
                <span className='commentmethod2'>버튼을 클릭해주세요</span>
                <img className='qrimg' src={require('../img/QRMethod2.png').default} alt='talkimg' />
            </div>
        );
    }
}
export default qrmethod2;