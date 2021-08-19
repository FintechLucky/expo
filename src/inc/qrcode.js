import React, { useState } from 'react';
import axios from 'axios';
import '../css/QRCode.css'

function QRCode(){

    const [img, setImage] = useState(null);

    const onChange = (e) => {
        setImage(e.target.files[0]);
    }

    const onClick = async () => {
        // QR 리더 api 를 통해 송금 qr 코드 디코딩 하여 paylink 얻음
        const formData = new FormData();
        formData.append('file',img)
        const res = await axios.post("https://api.qrserver.com/v1/read-qr-code/", formData);
        const payLink = res.data[0].symbol[0].data;

        // 얻어온 payLink를 서버로 날려 DB에 저장시킴
        await axios({
            method:'post',
            url: '/user/qrCode',
            data: {
                payLink : payLink,
                email : localStorage.getItem("userEmail")
            }
        }).then((result) => {
            // 세션 유지를 위해 localStorage 사용
            localStorage.setItem("userPayLink", result.data.payLink);

            // 다 끝나면 main page 이동
            document.location.href = "/main";
        })
    }

        return (
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='AppName'>F i n     P a y</span>
                    <span className='subTitle'>쉬 운  정 산,  빠 른  송 금</span>
                    <span className='comment1'>송금 요청을 위한 카카오톡 송금 QR 코드</span>
                    <span className='comment2'>이미지를 등록해주세요</span>
                </div>
                <label htmlFor='file' className='PhotoBtn'>
                    <img className='Photoimg' src={require('../img/gallery.png').default} alt='talkimg'  />
                    <span className='PhotoText'>사진 불러오기</span>
                </label>
                <input type='file' id='file' name='file' onChange={onChange}/>
                <button className='QRBtn' onClick={onClick}>
                    <img className='QRimg' src={require('../img/qr-code.png').default} alt='talkimg' />
                    <span className='QRText'>송금 QR 이미지 등록</span>
                </button>
                <button className='MethodBtn'>
                    <span className='MethodText'>송금 QR 이미지 다운로드 방법</span>
                </button>
            </div>
        );
}

export default QRCode;