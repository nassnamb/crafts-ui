import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { createUser, getUser, updateUser } from './UserService';
import StyledInput from './StyledInput';
import StyledSelect from './StyledSelect';

const UserEdit = ( props ) => {

    const emptyItem = {login: '', lastName: '', firstName: '', password: '', status: 'Active'};
    const userStatusList = ['Active', 'Inactive'];

    const [item, setItem] = useState(emptyItem);
    const history = useHistory();

    useEffect(() => {
        const userId = props.match.params.id;
        if (userId !== 'new') {
            getUser(userId).then(user => setItem(user));
        }
    }, [props.match.params.id])


    const handleChange = (event) => {
        const { value, name } = event.target;
        setItem({ ...item, [name]: value });
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        if(item.userId) {
            updateUser(item.userId, item);
        } else {
            createUser(item)
        }
        history.push('/users');
    }


    return (<div>
        <AppNavbar />
        <Container>
            <h2>{item.userId ? 'Edit User' : 'Add User'}</h2>
            <Form onSubmit={handleSubmit}>
                <StyledInput label="Identifiant" name="login" onChange={handleChange} value={item.login} disabled={item.userId} />
                <StyledInput label="Nom" name="lastName" onChange={handleChange} value={item.lastName} />
                <StyledInput label="Prénom" name="firstName" onChange={handleChange} value={item.firstName} />
                {!item.userId && <StyledInput type="password" label="Mot de passe" name="password" onChange={handleChange} value={item.password}  />}
                <StyledSelect label="Statut" name="status" options={userStatusList} onChange={handleChange} value={item.status} />
                <br />

                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Button color="secondary" onClick={() => history.goBack()}>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
    );
}

export default withRouter(UserEdit);