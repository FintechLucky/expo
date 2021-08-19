import React, { Component } from 'react';

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
            <div className='containermain'>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className='AppNamemain'>Fin Pay</span>
                </div>
                
                <img className='line' src={require('../img/substract.png').default} alt='talkimg' />
                
                <div className='containerprofile'>
                    <img className='user' src={require('../img/user.png').default} alt='talkimg' />
                    <span className='username'>고객명</span>
                </div>
                
                <img className='line' src={require('../img/substract.png').default} alt='talkimg' />

            </div>
        );
    }
}
export default main;