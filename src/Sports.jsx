import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Sports = () => {

    const [sportsList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Dance","picture":"https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2016/09/09/4609hr_.jpg"},
        {"id":"2","job":"Fitness","picture":"https://www.plateforme-fitness.fr/wp-content/uploads/2019/06/fitness-2.jpg"},
        {"id":"3","job":"Natation","picture":"https://www.planetegrandesecoles.com/wp-content/uploads/2023/08/avantages-sport-natation-etudiant-activite-850x560.jpg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {sportsList.map((cat, index) => (
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
export default Sports;