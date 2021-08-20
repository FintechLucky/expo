import React, { Component } from 'react';
import '../css/Main.css'

let responses ="";
class main extends Component {
    constructor(props) {
        super(props);
        this.state={
            response:[]
        }
       
    }

    componentDidMount(){
        this.friends()
    }

    
    friends = async () => {
        const {Kakao} = window;
     
        Kakao.API.request({
            url: '/v1/api/talk/friends',
            success: function(response) {
                responses=response.elements
                // this.setState({response:response.elements})
            },
            fail: function(error) {
              console.log(error);
            }
          });

      }

    submit = event=> {
        event.preventDefault();
        console.log(this.props)
     
        // window.open('/main/beforefs')
        this.props.history.push({
            pathname: "/main/beforefs",
            state: { lists: responses },
          });
    }

    render() {  

        return (
            <div className='container_main'>

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

                <button onClick={this.submit}>
                    <img className='make_main' src={require('../img/make.png').default} alt='talkimg' />
                </button>
            </div>
        );
    }
}
export default main;