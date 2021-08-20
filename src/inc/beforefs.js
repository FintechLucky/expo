import React, { Component } from 'react';
import '../css/BeforeFS.css'

let name = []
let photo = []
class beforefs extends Component {
    constructor(props) {
        super(props); // 작성하지 않으면 에러 발생!
        this.state = {
          
        };

      }

    onClick(){
        window.open('/main/beforefs')
    }

    makeprofile =() => {
        var friendList=this.props.location.state.lists
        console.log(friendList)
        return friendList.map((friend, i) => {
            console.log(i, friend);

            if (friend.profile_thumbnail_image=== ""){
                return (
                    <div className='container_profile_before'>
                        <img className='user_main' src={require('../img/user.png').default} alt='talkimg' />
                        <span className='username_before'>{friend.profile_nickname}</span>
                        <input type="checkbox" className="cbox"></input>
                    </div>
             )
            } 

            else{
                return (
                    <div className='container_profile_before'>
                        <img className='user_main' src={friend.profile_thumbnail_image} alt='talkimg' />
                        <span className='username_before'>{friend.profile_nickname}</span>
                        <input type="checkbox" className="cbox"></input>
                    </div>
             )
            }
        });
    }

    handleChange =(e)=>{
        console.log(e.target.value);
    }

    render() {  

        return (
            <div>
                <div className='container_before'>
                    <span className='AppName_before'>친구 선택</span>
                    <input type={"text"} className={"input_name"} onChange={this.handleChange}/>
                    {this.makeprofile()}
                    <button onClick = {this.onClick}>
                    <img className='freind_selcet' src={require('../img/selectfreind.png').default} alt='talkimg' />
                    </button>
                </div>
                
            </div>
        );
    }
}
export default beforefs;