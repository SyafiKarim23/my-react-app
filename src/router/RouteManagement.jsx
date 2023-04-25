import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoadingComponent from '../components/loadingComponent/LoadingComponent';
// import LoginPage from '../pages/loginPage/LoginPage';
import FormComponents from '../pages/form/FormComponents';
import LayoutComponent from '../components/layouts/LayoutComponent';
import HomePage from '../pages/homePage/HomePage';
import AboutMe from '../pages/aboutMe/about';
import Portfolio from '../pages/Portfolio/Portfolio';
import FormComponentExp from '../pages/formExample/FormComponentExp';
import ReactCaptone from '../pages/reactCaptone/reactCaptone';
import CodeCompetance from '../pages/codeCompetance2/CodeCompetance';
import CreateProduct from '../pages/createProduct/createProduct';
import FormCRUD from '../pages/CRUD/FormCRUD';
import Landingpage from '../pages/LandingPage/landingpage';
import LoginPage from '../pages/loginPages/LoginPage';



const RouteManagement = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/");
        }
    }, [token]);

    return (
        <Suspense fallback={<LoadingComponent />}>
            {!token ? (
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                </Routes>
            ) : (
                <LayoutComponent>
                    <Routes>
                        <Route path="/form" element={<FormComponents />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/aboutme/:id" element={<AboutMe />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/formExample" element={<FormComponentExp />} />
                        <Route path="/reactcaptone" element={<ReactCaptone />} />
                        <Route path="/codecompetance2" element={<CodeCompetance />} />
                        <Route path="/createproduct" element={<CreateProduct />} />
                        <Route path="/FormCRUD" element={<FormCRUD />} />
                        <Route path="/landingpage" element={<Landingpage />} />
                        {/* <Route path="/Loginpages" element={<LoginPage />} /> */}
                    </Routes>

                </LayoutComponent>
            )}
        </Suspense>
    );
}

export default RouteManagement;
