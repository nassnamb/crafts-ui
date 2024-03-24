import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const LogistiqueTransport = () => {

    const [logistiqueTransportList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Chauffeur avec voiture","picture":"https://media.pickmecab.fr/wysiwyg/chauffeur.jpg"},
        {"id":"2","job":"Chauffeur sans voiture","picture":"https://m.media-amazon.com/images/I/8108A2JRTuL._AC_UY350_.jpg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {logistiqueTransportList.map((cat, index) => (
                        <Category
                            key={`${cat.job}-${index}`}
                            label={cat.job}
                            picture={cat.picture}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}
export default LogistiqueTransport;