import React, { Component } from 'react';
import '../css/QRMethod.css'

class qrmethod1 extends Component {

    goMethod2 () {
        document.location.href = "/qrcode/qrmethod2";
    }


    render() {
        return (
            <button className='container' onClick={this.goMethod2}>
                <img className='pagemark' src={require('../img/pagemark1.png').default} alt='talkimg' />
                <span className='commentmethod1'>카카오톡 프로필에서 송금 QR 코드</span>
                <span className='commentmethod2'>버튼을 클릭해주세요</span>
                <img className='qrimg' src={require('../img/QRMethod1.png').default} alt='talkimg' />
            </button>
        );
    }
}
export default qrmethod1;