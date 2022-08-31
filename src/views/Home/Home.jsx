import React from "react";
import { Col, Row } from "antd";
import Header from "../../components/header/header.jsx";
import MySwiper from "../../components/Swiper/Swiper.jsx";
import Ripple from '../../components/ripple/ripple.jsx'
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Header />
      <Row>
        <Col span={24}>
          <MySwiper />
        </Col>
      </Row>
      <Ripple/>
      <Outlet/>
    </>
  );
}
