import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import Images from "../../assets/images/Images";

type Props = {};

const StayInTouch = (props: Props) => {
  return (
    <Row gutter={48} className="stay-in-touch">
      <Col
        span={10}
        className="infor-side"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="fade-up"
        data-aos-delay="0"
      >
        <h1 className="stay-in-touch-title">stay in touch</h1>
        <p className="stay-in-touch-sub-title">
          Register today for the DreamWorks Animation newsletter to receive all
          the latest information about our upcoming films and projects.
        </p>

        <Form className="stay-in-touch-form">
          <span className="notice-message">Enter your contact infor</span>
          <Form.Item
            label="Email"
            required
            labelAlign="left"
            labelCol={{
              span: 8,
            }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            required
            labelAlign="left"
            labelCol={{
              span: 8,
            }}
          >
            <Input />
          </Form.Item>

          <Button type="primary">Submit</Button>
        </Form>
      </Col>
      <Col
        span={13}
        className="img-side"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="fade-up"
        data-aos-delay="100"
      >
        <img src={Images.stayInTouch.trolls} />
      </Col>
    </Row>
  );
};

export default StayInTouch;
