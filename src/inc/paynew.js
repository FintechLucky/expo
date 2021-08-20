import React, { Component } from 'react';
import { withRouter } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/PayNew.css'
import Slider from "react-slick";


class paynew extends Component {

      
    render() {  
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <div className='grayContainer'>
            <div className='header'>
                <button className='addBtn'>
                    <span className='addText'>차수추가</span>
                </button>
                <span className='headerText'>정산하기 (1/1)</span>
                <button className='cancleBtn'>x</button>
            </div>
            <div className='body'>
                <span className='carousel'>
                    <span className='payInput'>
                        <span className='payWay'>
                            test
                        </span>
                    </span>
                    <div className='newMeet'></div> 
                </span> 
            </div>
            <button className='bottom'>
                <span className='bottomText'>
                    금액을 입력해주세요
                </span>
            </button>
        </div>
        );
    }
}
export default withRouter(paynew);
