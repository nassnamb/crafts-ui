import React, { useEffect, useState } from 'react';
import { Button, Container } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { fetchProfiles, deleteProfile } from './services/ProfileService';
import StyledProfileTable from './StyledProfileTable';
import {Card, notification} from 'antd';
import {DefaultAllowlist as styled} from "bootstrap/js/src/util/sanitizer";
import Category from "./components/Category";





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

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/profiles/new">Ajouter profil</Button>
                </div> <br/>
                <h3>Profils</h3> 
                <StyledProfileTable data={profiles} remove={remove} />

            </Container>

        </div>
    );
    
}

export default ProfileListPage;