import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [

    {
        label: <Link to="/form">Form</Link>,
        key: "1",
    },
    {
        label: <Link to="/formExample">Form Exp</Link>,
        key: "2",
    },
    {
        label: <Link to="/aboutme">About Me</Link>,
        key: "3",
    },
    {
        label: <Link to="/Portfolio">Portfolio</Link>,
        key: "4",
    },
    {
        label: <Link to="/reactcaptone">React Captone</Link>,
        key: "5",
    },
    {
        label: <Link to="FormCRUD">CRUD</Link>,
        key: "6",
    },
    {
        label: <Link to="/createproduct">Create Product</Link>,
        key: "7",
    },
    {
        label: <Link to="/landingpage">LandingPage</Link>,
        key: "8",
    },
    {
        label: (
            <Link to="/">
                <Button
                    type="primary"
                    onClick={() => {
                        localStorage.removeItem("token");
                    }}
                    danger
                >
                    Logout
                </Button>
            </Link>
        ),
        key: "9",
    },
];