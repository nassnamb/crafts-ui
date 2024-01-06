import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { createProfile, getProfile, updateProfile } from './services/ProfileService';
import StyledInput from './StyledInput';

const ProfileEdit = ( props ) => {

    const emptyItem = { description: ''};
    const [show, setShow] = useState(false); 

    const [item, setItem] = useState(emptyItem);
    const history = useHistory();

    useEffect(() => {
        const profile = props.match.params.id;
        if (profile !== 'new') {
            setShow(false);
            getProfile(profile).then(prof => setItem(prof));
        } else {
            setShow(true);
        }
    }, [props.match.params.id])


    const handleChange = (event) => {
        const { value, name } = event.target;
        setItem({ ...item, [name]: value });
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        if(item.profile) {
            updateProfile(item.profile, item);
        } else {
            createProfile(item)
        }
        history.push('/profiles');
    }


    return (<div>
        <AppNavbar />
        <Container>
            <h2>{item.profileId ? 'Edit Profile' : 'Add Profile'}</h2>
            <Form onSubmit={handleSubmit}>
                <StyledInput label="Profile" name="profileId" onChange={handleChange} value={item.profileId} disabled={!show} />
                <StyledInput label="Description" name="description" onChange={handleChange} value={item.description} />
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

export default withRouter(ProfileEdit);