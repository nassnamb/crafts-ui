import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { createUser, getUser, updateUser } from './services/UserService';
import StyledInput from './utils/StyledInput';
import StyledSelect from './utils/StyledSelect';
import { failure, getErrorDetails, success } from './utils';

const UserEdit = (props) => {

    const emptyItem = { login: '', lastName: '', firstName: '', password: '', status: 'Active' };
    const userStatusList = ['Active', 'Inactive'];
    const [fieldsOk, setFieldsOk] = useState(false);

    const [item, setItem] = useState(emptyItem);
    const history = useHistory();

    useEffect(() => {
        const userId = props.match.params.id;
        if (userId !== 'new') {
            getUser(userId).then(user => setItem(user));
        }
    }, [props.match.params.id])

    useEffect(() => {
        //Save button are disabled until all fields are filled
        if (item.userId) {
            setFieldsOk(item.login !== '' && item.lastName !== '' && item.firstName !== '');
        } else {
            setFieldsOk(item.login !== '' && item.lastName !== '' && item.firstName !== '' && item.password !== '');
        }
    }, [item.login, item.lastName, item.firstName, item.password]);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setItem({ ...item, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.userId) {
            updateUser(item.userId, item);
        } else {
            createUser(item)
            .then(() => success('L\'utilisateur \'' +item.firstName+ ' ' +item.lastName+ '\' a été créé avec succès'))
            .catch((error) => {
                failure('échec de création d\'utilisateur', getErrorDetails(error));
            });
        }
        history.push('/users');
    }


    return (<div>
        <AppNavbar />
        <Container>
            <h2>{item.userId ? 'Mofification Utilisateur' : 'Ajout Utilisateur'}</h2>
            <Form onSubmit={handleSubmit}>
                <StyledInput label="Identifiant" name="login" onChange={handleChange} value={item.login} disabled={item.userId} />
                <StyledInput label="Nom" name="lastName" onChange={handleChange} value={item.lastName} />
                <StyledInput label="Prénom" name="firstName" onChange={handleChange} value={item.firstName} />
                {!item.userId && <StyledInput type="password" label="Mot de passe" name="password" onChange={handleChange} value={item.password} />}
                <StyledSelect label="Statut" name="status" options={userStatusList} onChange={handleChange} value={item.status} />
                <br />

                <FormGroup>
                    <Button id="saveButton" color="primary" type="submit" disabled={!fieldsOk}>Save</Button>{' '}
                    <Button color="secondary" onClick={() => history.goBack()}>Cancel</Button>
                </FormGroup>
            </Form>
        </Container>
    </div>
    );
}

export default withRouter(UserEdit);