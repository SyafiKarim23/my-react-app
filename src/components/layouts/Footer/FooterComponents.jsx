import React from 'react';
import { Layout } from 'antd';


const FooterComponents = () => {
    const { Footer } = Layout
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2023 Created by Ant UED
        </Footer>

    );
}

export default FooterComponents;
