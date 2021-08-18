import React, { Component } from 'react';
import '../css/QRCode.css'

class qrcode extends Component {
    render() {
        return (
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='AppName'>F i n     P a y</span>
                    <span className='subTitle'>쉬 운  정 산,  빠 른  송 금</span>
                    <span className='comment1'>송금 요청을 위한 카카오톡 송금 QR 코드</span>
                    <span className='comment2'>이미지를 등록해주세요</span>
                </div>
                <button className='PhotoBtn'>
                    <img className='Photoimg' src={require('../img/gallery.png').default} alt='talkimg' />
                    <span className='PhotoText'>사진 불러오기</span>
                </button>
                <button className='QRBtn'>
                    <img className='QRimg' src={require('../img/qr-code.png').default} alt='talkimg' />
                    <span className='QRText'>송금 QR 이미지 등록</span>
                </button>
                <button className='MethodBtn'>
                    <span className='MethodText'>송금 QR 이미지 다운로드 방법</span>
                </button>
            </div>
        );
    }
}
export default qrcode