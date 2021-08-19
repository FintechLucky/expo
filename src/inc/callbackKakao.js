import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import axios from 'axios';

function CallbackKakao() {
    const search = useLocation().search;
    // 카카오에서 준 인가 코드를 이용해 서버로부터 Access Token 발급 및 로그인 및 회원가입 진행
    const code = new URLSearchParams(search).get('code').toString();
    
    // lifecycle 관리 최초 랜더링시 한번만 실행
    useEffect(() => {
        main()
    })
  
  
    const main = async () => {
      if (code === null || code === "") {
          alert("카카오에서 코드를 받는데 실패했습니다");
          return;
      } else {
        await new Promise((resolve, reject) => {
            getKakaoTokenHandler(resolve, code);
        }).then((result) => {
            const userInfo = result.user;
            // 사용자 데이터 유지 필요 - localStorage 사용
            localStorage.setItem("userName" , userInfo.name);
            localStorage.setItem("userEmail" , userInfo.email);
            localStorage.setItem("userProfileImgUrl" , userInfo.profileImgUrl);
            localStorage.setItem("userPayLink" , userInfo.payLink);
            
            // // 서버에서 발급받은 토큰 할당
            const {Kakao} = window;
            Kakao.Auth.setAccessToken(result.accessToken);

            // 페이지 넘겨줌 처리
            if(!userInfo.payLink){
                // DB에 payLink 없을 시 qrCode 등록 페이지 이동
                document.location.href = '/qrcode';
            } else {
                // 있을시 홈페이지 이동
                document.location.href = "/main";
            }
            
          });
      }
    }
  
    // 인가 코드를 활용하여 사용자 정보를 받아옴 -> 인가 코드를 REST API 로 한번 사용하였기 때문에 재사용 불가
    const getKakaoTokenHandler = async (resolve, code) => {
      const url = "/oauth2/authorization/kakao"
      await axios.get(url, {params: {code}})
      .then((res) => {
        resolve(res.data) // 위에 console.log(result)에 파라미터 값으로 들어감 - User 데이터
      })
      .catch((error) => {
        console.log(error.response)
        resolve(null)
      })
    }

  
    return (
      <>
          카카오 로그인 중 - 로그인 로딩 화면 디자인 필요
      </>
    )
  }
  
  
  export default CallbackKakao