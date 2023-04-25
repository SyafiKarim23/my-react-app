import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { MENU_ITEM } from './constans';
import FooterComponents from './Footer/FooterComponents';
import HeaderComponents from './Header/HeaderComponents';


const LayoutComponent = ({ children }) => {
    const { Content } = Layout;
    return (
        <>
            <Layout>
                <HeaderComponents />
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                    }}
                >

                    <div
                        style={{
                            padding: 24,
                            minHeight: 380,
                            background: "#fff",
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <FooterComponents />
            </Layout>
        </>
    );
}

export default LayoutComponent;
