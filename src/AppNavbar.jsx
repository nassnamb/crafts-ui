import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Accueil</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/user">Utilisateurs</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/profile">Profils</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/">Clients</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/">Artisans</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/">Audit</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/">Contact</NavbarBrand>&nbsp;&nbsp;&nbsp;
            <NavbarBrand tag={Link} to="/">À Propos</NavbarBrand>
        </Navbar>;
    }
}
