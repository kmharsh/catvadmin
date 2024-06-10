import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from '../Component/Login/login';
import OTPComponent from '../Component/OTPComponent/OTPComponent';
import Dashboard from '../Component/pages/Dashborad';
import Customer from '../Component/pages/Customer';
import AccessLog from '../Component/pages/AccessLog';
import ErrorLog from '../Component/pages/ErrorLog';
import Payment from '../Component/pages/Payment';
import Role from '../Component/pages/Role';
import Setting from '../Component/pages/Setting';
import ThirdpartyLog from '../Component/pages/ThirdpartyLog';
import User from '../Component/pages/User';
import UserProfile from '../Component/pages/UserProfile';
import Permission from '../Component/pages/Permission';
import Otppage from '../Component/pages/Otppage';
import AddUpdateuser from '../Component/pages/AddUpdateuser';
import AddUpdatePersmission from '../Component/pages/AddUpdatePersmission';
import AddUpdateRole from '../Component/pages/AddUpdateRole';
import Layout from '../Component/inputComponent/Layout';
import RoleViewComponent from '../Component/pages/RoleViewComponent';
import UserViewComponent from '../Component/pages/UserViewComponent';
import AccessViewComponent from '../Component/pages/AccessViewComponent';
import ErrorViewComponent from '../Component/pages/ErrorViewComponent';
import ThridPartViewComponent from '../Component/pages/ThridPartViewComponent';
import PaymentViewComponent from '../Component/pages/PaymentViewComponent';

const MainLayout = ({ children }) => {
    const location = useLocation();
    const hideSideNavPaths = ['/', '/OTPComponent', '/login'];
    const shouldHideSideNav = hideSideNavPaths.includes(location.pathname);

    return (
        <div>
            {!shouldHideSideNav && <Layout />}
            <div>
                {children}
            </div>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/OTPComponent" element={<OTPComponent />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customer" element={<Customer />} />
            <Route path="accessLog" element={<AccessLog />} />
            <Route path="errorLog" element={<ErrorLog />} />
            <Route path="payment" element={<Payment />} />
            <Route path="role" element={<Role />} />
            <Route path="setting" element={<Setting />} />
            <Route path="permission" element={<Permission />} />
            <Route path="thirdpartyLog" element={<ThirdpartyLog />} />
            <Route path="user" element={<User />} />
            <Route path="Otppage" element={<Otppage />} />
            <Route path="AddUpdateuser" element={<AddUpdateuser />} />
            <Route path="AddUpdatePersmission" element={<AddUpdatePersmission />} />
            <Route path="AddUpdateRole" element={<AddUpdateRole />} />
            <Route path="RoleViewComponent" element={<RoleViewComponent />} />
            <Route path="UserViewComponent" element={<UserViewComponent />} />
            <Route path="AccessViewComponent" element={<AccessViewComponent />} />
            <Route path="ErrorViewComponent" element={<ErrorViewComponent />} />
            <Route path="ThridPartViewComponent" element={<ThridPartViewComponent />} />
            <Route path="PaymentViewComponent" element={<PaymentViewComponent />} />
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

const RouterComponent = () => {
    return (

        <AppRoutes />

    );
};

export default RouterComponent;
