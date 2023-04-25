import React from 'react';
import {
    Layout, Menu, Button, Form, Input, Typography, Modal, Space,
    Col, Row, Image
} from 'antd';
import { MENU_ITEM } from './constant';
import { useState } from 'react';
import {
    FacebookOutlined,
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined
} from '@ant-design/icons';
import "./assets/css/style.css"
import heroimg from "./assets/img/heroimg.png"



const CodeCompetance = () => {
    const { Header } = Layout
    const [current, setCurrent] = useState('1');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const { TextArea } = Input;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values) => {
        setIsModalOpen(true);
        setModalData({ ...values });
    };
    return (
        <>
            <div>
                {/* Header */}
                <Header
                    style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            float: 'left',
                            width: 120,
                            height: 31,
                            margin: '16px 24px 16px 0',
                            background: '#DCDCDC',
                        }}
                    />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        items={MENU_ITEM}
                        disabledOverflow
                        onClick={onClick} selectedKeys={[current]}
                    />
                </Header>
            </div>

            {/* Content */}
            <div className='content'>
                <h1>Welcome to E Startup</h1>
                <h2>Elegant AntDesign template for startup, Apps & More...</h2>
                <img width={300} height={200} src={heroimg} className="heroimg" alt="heroimg" />
                <br />
                <Button type="primary">
                    Get Started
                </Button>
            </div>
            <br />
            <div>
                <Row className='contentcard' gutter={30}>
                    <Col span={12}>

                        <h4>Contact Us</h4>
                        <p>Phone : +62 8155 9540 169</p>
                        <p>Email : mohammadsyafikarimamrullah@gmail.com</p>
                        <p>Jombang</p>
                        <p> east Java, KP 61474</p>
                        <p>Indonesia</p>

                    </Col>
                    <Col span={12}>
                        <Form
                            name='bio'
                            layout='horizontal'
                            onFinish={onFinish}
                            style={{
                                maxWidth: 600,
                            }}
                        >
                            <Form.Item
                                name="firsName"
                                label="First Name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Input Name"
                                    },
                                ]}
                            >
                                <Input placeholder='Input Your first name' />
                            </Form.Item>
                            <Form.Item
                                name="lastName"
                                label="Last Name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Input last Name!"
                                    },
                                ]}
                            >
                                <Input placeholder='Input Your last name' />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[
                                    {
                                        type: 'email',
                                        required: true,
                                        message: "Please Input last Email!"

                                    },
                                ]}
                            >
                                <Input placeholder='Input Your last Email' />
                            </Form.Item>
                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Message!",
                                    },
                                ]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                        <Modal
                            title="Basic Modal"
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                        >
                            <ol>
                                <li>First Name: {modalData.firstName}</li>
                                <li>Last Name: {modalData.lastName}</li>
                                <li>Email: {modalData.email}</li>
                                <li>Alamat: {modalData.message}</li>
                            </ol>
                        </Modal>
                    </Col>
                </Row>

            </div>

            {/* About US */}
            <div className='aboutus'>
                <h2>About Us</h2>
                <Image
                    width={400}
                    src="https://www.nobleprog.id/sites/hitrahr/files/category_images/height100_scale/ant_design_training.png?t=657a5cd8"
                />
                <p>Ant Design System is the open-source code for the enterprise-level React UI library. Ant Design was created by Alibaba, and is currently used by big names like Alibaba, Tencent, Baidu, Lenovo, and others. Ant Design is a library containing components used to create interactive UIs, which are touted to be easy to use and easy to integrate.
                    Ant Design is one of the most popular UI libraries on Github with more than 56 thousand ratings/stars in 2021, or growing from around 40 thousand in 2018, as well as more than 340 thousand downloads on npm. The Ant Design library consists of some code, namely 43.7% TypeScript, 31.1% JavaScript, 24.9% Less, and 0.3% others.</p>
            </div>

            {/* Footer */}
            <div>
                <Row className='card' >
                    <Col span={6}>
                        <h4>SIKAMRU</h4>
                        <p>Jombang</p>
                        <p> east Java, KP 61474</p>
                        <p>Indonesia</p>
                        <p>Phone : +62 8155 9540 169</p>
                        <p>Email : mohammadsyafikarimamrullah@gmail.com</p>
                    </Col>
                    <Col span={6}>
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>

                    </Col>
                    <Col span={6}>
                        <h4>Our Services</h4>
                        <ul>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i class="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <h4>Social Media</h4>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>

                        <Space>
                            <a href="https://www.facebook.com/amrulloh.syafi" target="_blank"> <FacebookOutlined /></a>
                            <a href="https://twitter.com/karim_syafi23" target="_blank"> <TwitterOutlined /></a>
                            <a href="https://www.instagram.com/syafikarim_2037/" target="_blank"> <InstagramOutlined /></a>
                            <a href="https://www.linkedin.com/in/syafi-karim-191144269/" target="_blank" > <LinkedinOutlined /></a>
                        </Space>

                    </Col>
                </Row>
            </div>
            <div className='footer' >
                <Row>
                    <Col span={12}>
                        <h4>Copyright Syafikarim</h4>
                    </Col>
                    <Col span={12}>
                        <h4>
                            Designed by <a href="https://ant.design/" target="_blank">Ant Design</a>
                        </h4>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default CodeCompetance;
