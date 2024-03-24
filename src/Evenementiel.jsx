import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Evenementiel = () => {

    const [evenementList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Wedding planer","picture":"https://resize.elle.fr/article/var/plain_site/storage/images/deco/styles/decoration-mariage/comment-et-pourquoi-choisir-un-wedding-planner/qu-est-ce-qu-un-wedding-planner/69267514-2-fre-FR/Qu-est-ce-qu-un-wedding-planner.jpg"},
        {"id":"2","job":"Photographie","picture":"https://f.maformation.fr/edito/sites/3/2021/05/photographie.jpeg"},
        {"id":"3","job":"Hotesse d'accueil","picture":"https://noemie-hotesses.fr/wp-content/uploads/2022/09/image-prestations-entreprises-1024x683.jpg"},
        {"id":"4","job":"Service","picture":"https://www.rjce.fr/wp-content/uploads/2021/10/objectif-service-client.jpg"},
        {"id":"5","job":"Décoration","picture":"https://www.tartifumedeco.fr/wp-content/uploads/2018/08/ssalon-d%C3%A9coration-nature-1080x751.jpeg"},
        {"id":"6","job":"Organisation évènement","picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoBm9R_deYU9omtDflw3VRy6rWo8owqOH3U8O6SYj-Q&s"},
        {"id":"7","job":"Repas traiteur","picture":"https://cdn0.mariages.net/vendor/4773/3_2/640/jpg/maonicorner-114_3_144773-165757371660512.jpeg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {evenementList.map((cat, index) => (
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
export default Evenementiel;