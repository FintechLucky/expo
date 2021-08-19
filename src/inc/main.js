import React, { Component } from 'react';
import '../css/Main.css'

class main extends Component {

    componentDidMount(){
        this.friends()
    }

    //로그인시 저장되있던 AccessToken 활용하여 사용자 친구목록 불러오기
    friends = async () => {
        const {Kakao} = window;
        Kakao.API.request({
            url: '/v1/api/talk/friends',
            success: function(response) {
              console.log(response);
            },
            fail: function(error) {
              console.log(error);
            }
          });
      }

      
    render() {  

        return (
            <div className='container_main'>
                <span className='AppName_main'>Fin Pay</span>
                
                <div className='container_profile'>
                    <img className='user_main' src={require('../img/user.png').default} alt='talkimg' />
                    <span className='username_main'>고객명</span>
                </div>
                
                <img className='line_main' src={require('../img/substract.png').default} alt='talkimg' />

                <div className='container_profile'>
                    <span className='state_main'>정산중인 모임</span>
                    
                </div>

                <img className='line_main' src={require('../img/substract.png').default} alt='talkimg' />

                <div className='container_profile'>
                    <span className='state_main'>즐겨찾는 모임</span>
                    
                </div>

                <img className='line_main' src={require('../img/substract.png').default} alt='talkimg' />

                <button>
                    <img className='make_main' src={require('../img/make.png').default} alt='talkimg' />
                </button>
            </div>
        );
    }
}
export default main;