import React, { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUser } from './UserService';
import StyledUserTable from './StyledUserTable';
import { notification } from 'antd';

const UserListPage = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, []);

    const remove = (id) => {
        deleteUser(id)
            .then(() => {
                let updatedUsers = [...users].filter(i => i.userId !== id);
                setUsers(updatedUsers);
            })
    }

    const failure = (msg) => {

    }

    const success = (msg) => {
        notification['success']({
            placement: "topRight",
            duration: 10,
            top: 70,
            message: msg

        })

    }

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/users/new">Ajout Utilisateur</Button>
                </div> <br/>
                <h3>Liste des Utilisateurs</h3> 
                <StyledUserTable data={users} remove={remove} />
            </Container>
        </div>
    );
    
}

export default UserListPage;