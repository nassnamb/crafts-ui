import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Sante = () => {

    const [santeList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Infirmerie","picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lokCkys3jBQyZRpPsL3ChYdt8DV_JYh5CSffp9MEDw&s"},
        {"id":"2","job":"Medecin","picture":"https://africanshapers.com/wp-content/uploads/2020/06/7JqPPI-u.jpeg"},
        {"id":"3","job":"Massage","picture":"https://www.wecasa.fr/mag/wp-content/uploads/2022/08/massage-tantrique-transformed-1024x680.jpeg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {santeList.map((cat, index) => (
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
export default Sante;