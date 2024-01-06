import React, { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { fetchProfiles, deleteProfile } from './services/ProfileService';
import StyledProfileTable from './StyledProfileTable';
import { notification } from 'antd';

const ProfileListPage = () => {

    const [profiles, setProfiles] = useState([]);


    useEffect(() => {
        fetchProfiles().then(data => setProfiles(data));
    }, []);

    const remove = (id) => {
        deleteProfile(id)
            .then(() => {
                let updatedProfiles = [...profiles].filter(i => i.profileId !== id);
                setProfiles(updatedProfiles);
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
                    <Button color="success" tag={Link} to="/profiles/new">Add profile</Button>
                </div> <br/>
                <h3>Profiles</h3> 
                <StyledProfileTable data={profiles} remove={remove} />
            </Container>
        </div>
    );
    
}

export default ProfileListPage;