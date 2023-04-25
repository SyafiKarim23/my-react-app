import React from 'react';
import { Input } from 'antd';
import './style.css';
import { MinusOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useState } from 'react';

const Calculator = () => {
    const [size, setSize] = useState('large'); // default is 'middle'
    return (
        <div className='body'>
            <div className="k">
                <div>
                    <Input placeholder="" />
                </div>
                <br />
                <div>
                    <Space wrap>
                        <Button type="primary" shape="round" size={size}>
                            7
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            8
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            9
                        </Button>
                        <Button type="primary" shape="round" icon={<PlusOutlined />} size={size}>
                        </Button>
                    </Space>
                </div>
                <br />
                <div>
                    <Space wrap>
                        <Button type="primary" shape="round" size={size}>
                            4
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            5
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            6
                        </Button>
                        <Button type="primary" shape="round" icon={<MinusOutlined />} size={size}>
                        </Button>
                    </Space>
                </div>
                <br />

                <div>
                    <Space wrap>
                        <Button type="primary" shape="round" size={size}>
                            1
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            2
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            3
                        </Button>
                        <Button type="primary" shape="round" icon={<CloseOutlined />} size={size}>
                        </Button>
                    </Space>
                </div>
                <br />
                <div>
                    <Space wrap>
                        <Button type="primary" shape="round" size={size}>
                            0
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            .
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            C
                        </Button>
                        <Button type="primary" shape="round" size={size}>
                            :
                        </Button>
                    </Space>
                </div>
                <br />
                <div>
                    <Button type="primary" block>
                        =
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
