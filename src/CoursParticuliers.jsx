import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import physiqueChimie from "./assets/physiqueChimie.png";
import infographie from "./assets/infographie.jpg";
import langueAfricaine from "./assets/langueAfricaine.jpg";
import anglais from "./assets/anglais.png";
import francais from "./assets/francais.jpeg";
import developpementPersonnel from "./assets/developpementPersonnel.png";
import histoireGeographie from "./assets/histoireGeographie.png";
import economie from "./assets/economie.jpg";
import biologie from "./assets/mathematique.png";
import Category from "./Category";
import {Link} from "react-router-dom";

const CoursParticuliers = () => {

    const [coursParticuliersList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Mathématiques","picture":"https://media.jemepropose.com/offers_pictures/member_885676/offer_3092528/offer_3092528_picture_1032081.png"},
        {"id":"2","job":"Physique et Chimie","picture":physiqueChimie},
        {"id":"3","job":"Informatique-Infographie","picture":infographie},
        {"id":"4","job":"Economie Finance Comptabilité","picture":economie},
        {"id":"5","job":"Anglais","picture":anglais},
        {"id":"6","job":"Developpement personnel","picture":developpementPersonnel},
        {"id":"7","job":"Français","picture":francais},
        {"id":"8","job":"Langues africaines","picture":langueAfricaine},
        {"id":"9","job":"Histoire-Géographie","picture":histoireGeographie},
        {"id":"10","job":"Biologie-SVT","picture":biologie}
    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div>
                    <div className="CardsContainer">
                        {coursParticuliersList.map((cat, index) => {
                            let toPath = '/';
                            if (cat.id === "1") {
                                toPath = '/etapes';
                            } else if (cat.id === "2") {
                                toPath = '/etapes';
                            } else if (cat.id === "3") {
                                toPath = '/etapes';
                            } else if (cat.id === "4") {
                                toPath = '/etapes';
                            }
                            return (
                                <Link key={`${cat.job}-${index}`} to={toPath}>
                                    <Category
                                        label={cat.job}
                                        picture={cat.picture}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </div>
    );
}
export default CoursParticuliers;