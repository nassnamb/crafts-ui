import React from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const ProfileMenu = () => {

    return (
        <div>
            <AppNavbar />
            <Container fluid>
                <Button color="link"><Link to="/profiles">Profiles</Link></Button>
            </Container>
        </div>
    );

}
export default ProfileMenu;