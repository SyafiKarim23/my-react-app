import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Landingpage = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        localStorage.setItem("token", true);
        navigate("/aboutme");
    };
    return (
        <>
            <div>
                <h3>Simple Header</h3>
                <Button type="primary" onClick={onLogin}>
                    Create Product
                </Button>
            </div>

        </>
    );
}

export default Landingpage;
