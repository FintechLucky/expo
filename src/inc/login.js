import React, { Component } from 'react';
import { withRouter } from 'react-router';
import '../css/Login.css'


class login extends Component {

    componentDidMount(){
        this.sessionChk()
    }

    // local에 사용자 이메일이 저장 되어 있으면 바로 kakao Login 실행
    sessionChk() {
        if(localStorage.getItem("userEmail")){
            this.kakaoLogin()
        }
    }

    kakaoLogin() {
        // GET 으로 요청후 리다이랙트 한 주소 뒤에 인가 코드가 붙을 것임'
        const {Kakao} = window;

        Kakao.Auth.authorize({
            redirectUri: 'http://localhost:3000/callback/kakao',
            scope : 'account_email, profile_nickname, profile_image, friends'
          })
      }
      
    render() {  

        return (
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <span className='AppName'>F i n&nbsp;&nbsp;&nbsp;&nbsp;P a y</span>
                    <span className='subTitle'>쉬 운  정 산 , 빠 른  송 금</span>
                </div>
                <button className='LoginBtn' onClick = {this.kakaoLogin}>
                    <img className='Loginimg' src={require('../img/talk.png').default} alt='talkimg' />
                    <span className='LoginText'>카카오톡으로 로그인</span>
                    <p id="token-result"></p>
                </button>
            </div>
        );
    }
}
export default withRouter(login);
