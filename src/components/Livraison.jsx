import React, { useEffect, useState } from "react";
import '../App.css';
import AppNavbar from "../AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Livraison = () => {

    const [livraisonList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Livraison par moto","picture":"https://images.caradisiac.com/images/7/4/6/1/197461/S0-l-afrique-se-met-aussi-a-la-moto-electrique-723029.jpg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {livraisonList.map((cat, index) => (
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
export default Livraison;