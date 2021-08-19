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
            <div className='container'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                    <span>main</span>
                </div>
            </div>
        );
    }
}
export default main;