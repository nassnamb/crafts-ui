import React from 'react';
import '../App.css';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

const UserMenu = () => {

    return (
        <div>
            <AppNavbar />
            <Container fluid>
                <Button color="link"><Link to="/users">Users</Link></Button>
            </Container>
        </div>
    );

}
export default UserMenu;