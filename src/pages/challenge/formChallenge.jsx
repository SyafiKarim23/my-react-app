import React from 'react';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Modal,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from "antd";
import { useState } from "react";


const FormChallenge = () => {
    const [componentSize, setComponentSize] = useState("default");
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (
        <div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

            </Modal>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                style={{
                    maxWidth: 600,
                }}
                validateMessages={validateMessages}
            >
                <Form.Item
                    label="First Name">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tempat Lahir">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tanggal Lahir">
                    <DatePicker />
                </Form.Item>
                <Form.Item
                    name={['user', 'alamat']}
                    label="Alamat">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Alamat Email"
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'NoTelp']}
                    label="NoTelp"
                    rules={[
                        {
                            type: 'number',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Semester">
                    <Select>
                        <Select.Option value="demo">1</Select.Option>
                        <Select.Option value="demo">2</Select.Option>
                        <Select.Option value="demo">3</Select.Option>
                        <Select.Option value="demo">4</Select.Option>
                        <Select.Option value="demo">5</Select.Option>
                        <Select.Option value="demo">6</Select.Option>
                        <Select.Option value="demo">7</Select.Option>
                        <Select.Option value="demo">8</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Agama">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                        <Radio value={1}>Islam</Radio>
                        <Radio value={2}>Kristen</Radio>
                        <Radio value={3}>Hindu</Radio>
                        <Radio value={4}>Budha</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name={['user', 'summary']} label="summary">
                    <Input.TextArea />
                </Form.Item>

                <Button onClick={showModal}>Submit</Button>

            </Form>
        </div>
    );
}

export default FormChallenge;
