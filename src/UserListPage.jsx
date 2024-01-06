import React, { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { fetchUsers, deleteUserById, getUser } from './services/UserService';
import StyledUserTable from './StyledUserTable';
import { failure, getErrorDetails, success } from './utils';

const UserListPage = () => {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsers()
            .then(data => setUsers(data))
            .catch((error) => {
                failure("An error occured retrievieng users");
            });
    }, []);

    const remove = (id) => {
        deleteUserById(id)
            .then(() => {
                let updatedUsers = [...users].filter(i => i.userId !== id);
                setUsers(updatedUsers);
                success('L\'utilisateur avec l\'id \''+id+'\' a été supprimé avec succès');
            }).catch((error) => {
                getUser(id).then(user => failure('Echec de suppression de l\'utilisateur : '+user.login, getErrorDetails(error)));  
            });
    }


    return (
        <div>
            <AppNavbar /><br />
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/users/new">Ajout Utilisateur</Button>
                </div> <br />
                <h3>Liste des Utilisateurs</h3>
                <StyledUserTable data={users} remove={remove} />
            </Container>
        </div>
    );

}

export default UserListPage;