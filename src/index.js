import React from "react";
import ReactDOM from "react-dom";
import {Col, Row} from 'antd';
import Header from '../src/components/header/header.jsx'
import "./index.css";
import "../src/lib/font/iconfont.css"
import "../src/lib/swiper/swiper-bundle.min.css"
import MySwiper from '../src/components/Swiper/Swiper.jsx'
const App = () =>{
  return (
    <>
    <Header/>
    <Row>
      <Col span={24}>
      <MySwiper/>
      </Col>
    </Row>
    </>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"));
