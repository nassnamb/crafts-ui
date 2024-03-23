import React, { useEffect, useState } from "react";
import '../App.css';
import AppNavbar from "../AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Nettoyage = () => {

    const [nettoyageList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Maison","picture":"https://img.freepik.com/photos-premium/gros-plan-jeune-femme-afro-nettoyage-nouvelle-maison-concept-menage-nettoyage_58466-13254.jpg"},
        {"id":"2","job":"Bureau","picture":"https://multiclean.fr/wp-content/uploads/2021/04/Nettoyage-de-bureaux-scaled.jpg    "},
        {"id":"3","job":"Véhicules","picture":"https://www.westdetailing.fr/wp-content/uploads/2021/11/lavage-interieur-voiture.jpg"},
        {"id":"4","job":"Piscine","picture":"https://maison.20minutes.fr/wp-content/uploads/2022/02/nettoyer-la-piscine.jpg"},
        {"id":"5","job":"Meubles","picture":"https://www.quipeutlefaire.fr/wp-content/uploads/nettoyage-meuble-scaled.jpg"},
        {"id":"3","job":"Jardin","picture":"https://media.gerbeaud.net/2014/07/640/rateau-beche-pelle-outils-jardin.jpg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {nettoyageList.map((cat, index) => (
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
export default Nettoyage;