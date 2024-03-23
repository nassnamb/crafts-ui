import React, { useEffect, useState } from "react";
import '../App.css';
import AppNavbar from "../AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Informatique = () => {

    const [informatiqueList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Graphiste","picture":"https://f.maformation.fr/edito/sites/3/2021/07/graphisme.jpeg"},
        {"id":"2","job":"Marketing digital","picture":"https://www.lsa-conso.fr/mediatheque/7/5/2/000214257_896x598_c.jpg"},
        {"id":"3","job":"Développement","picture":"https://sokeo.fr/wp-content/uploads/2020/01/chris-ried-ieic5Tq8YMk-unsplash1.jpg"},
        {"id":"4","job":"Montage vidéo","picture":"https://images.iskysoft.com/filmora-video-editor/topic/corel-videostudio-ultimate.jpg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {informatiqueList.map((cat, index) => (
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
export default Informatique;