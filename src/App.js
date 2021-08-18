import React, {useEffect, useState} from 'react';
import './css/Login.css'


export default function App() {

  const [url, setUrl] = useState('');

  useEffect(() => {
    function loading() {
      console.log("test");
      return fetch('http://172.20.10.8:8080/login') // 개인 IPV4 주소 입력
        .then((response) => {
            console.log(response);
            return response.json()
        }).then(data => {
            console.log(data.url);
            setUrl(data.url);
        })
        .catch((error) => {
      console.error(error);
        });
    }
    loading();
    },[]);

  return (
    <div className = 'container'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span className = 'AppName'>F i n     P a y</span>
        <span className = 'subTitle'>쉬 운  정 산,  빠 른  송 금</span>
      </div>
      <button className = 'LoginBtn'>
        <img className = 'Loginimg' src= {require('./img/talk.png').default} alt='talkimg'/>
        <span className = 'LoginText'>카카오톡으로 로그인</span>
      </button>
    </div>
  );
}
