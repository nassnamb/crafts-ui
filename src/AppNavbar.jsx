import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchAppInfo } from './services/HomeService';


const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const emptyAppInfo = { name: '', version: 'None', env: 'Environment' };
    const [appInfo, setAppInfo] = useState(emptyAppInfo);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
         fetchAppInfo()
            .then(data => setAppInfo(data)) 
    }, []);


    return <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">Accueil</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/user">Utilisateurs</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/profile">Profils</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/">Clients</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/">Artisans</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/">Audit</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/">Contact</NavbarBrand>&nbsp;&nbsp;&nbsp;
        <NavbarBrand tag={Link} to="/">À Propos</NavbarBrand>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavbarBrand >{appInfo.env} : {appInfo.version}</NavbarBrand>
    </Navbar>;
}

export default AppNavbar;
