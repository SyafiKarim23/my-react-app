import React from 'react';
import { Card, Col, Row } from 'antd';
import './reactCaptone.css';
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import { USERS_DATA, USERS_DATA1 } from "./constant";
import { useParams, Link } from "react-router-dom";


const ReactCaptone = () => {
    const { id } = useParams();
    const data = id ? USERS_DATA.filter((item) => item.id === id
    ) : USERS_DATA;
    const data1 = id ? USERS_DATA1.filter((item) => item.id === id
    ) : USERS_DATA1;

    return (
        <>
            <h3>Why Join Us?</h3>
            {data.map((user) => (
                <Row key={user.id} className='row'>

                    <Card className='card'>
                        <Col>
                            <img src={user.image} alt='gambar' />
                            <div className="isi">{user.tekscard}</div>
                        </Col>
                    </Card>
                </Row>
            ))}
            <h3>Our Products and Services</h3>
            {data1.map((user) => (
                <Row key={user.id} className='row'>
                    <Card className='card'>
                        <Col>
                            <img src={user.img} alt='gambar' width="77" />
                            <h5 className="name">{user.name}</h5>
                            <div className="isi">{user.tekscard}</div>
                            {<a href="" target="_blank">Learn More <ArrowRightOutlined /></a>}
                        </Col>
                    </Card>
                </Row>
            ))}

        </>
    );
}

export default ReactCaptone;
