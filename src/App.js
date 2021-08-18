import './css/Login.css'


function App() {
  return (
    <body>
    <div className = 'container'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span className = 'AppName'>F i n     P a y</span>
        <span className = 'subTitle'>쉬 운  정 산,  빠 른  송 금</span>
      </div>
      <button className = 'LoginBtn' href="/">
        <img src='./img/talk.png' alt='talkimg'/>
        <span className = 'LoginText'>카카오톡으로 로그인</span>
      </button>
    </div>
    </body>
  );
}

export default App;
