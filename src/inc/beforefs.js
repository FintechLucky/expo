import React, { Component } from 'react';
import '../css/BeforeFS.css'


class beforefs extends Component {
    componentDidMount(){
        this.friends()
    }

    //로그인시 저장되있던 AccessToken 활용하여 사용자 친구목록 불러오기
    friends = async () => {
        const {Kakao} = window;
        Kakao.API.request({
            url: '/v1/api/talk/friends',
            success: function(response) {
              
              for(var step = 0; step<response.elements.length; step++){
                  console.log(response.elements[step].profile_nickname)
                  console.log(response.elements[step].profile_thumbnail_image)
              }
            },
            fail: function(error) {
              console.log(error);
            }
          });
      }

    handleChange =(e)=>{
        console.log(e.target.value);
    } //console 출력 안됨 -> 나중에 해결...

    render() {  

        return (
            <div className='container_before'>
                <span className='AppName_before'>친구 선택</span>
                <input type={"text"} className={"input_name"} onchange={this.handleChange}/>

            </div>
            
            
        );
    }
}
export default beforefs;