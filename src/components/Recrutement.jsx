import React, { useEffect, useState } from "react";
import '../App.css';
import AppNavbar from "../AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Recrutement = () => {

    const [recrutementList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Sécrétaires-assistants","picture":"https://infos.emploipublic.fr/mediatheque_edito/9/1/0/000033019_900x500_c.jpeg"},
        {"id":"2","job":"Juristes","picture":"https://storage.letudiant.fr/mediatheque/letudiant/5/9/2742359-juriste-social-original.jpg"},
        {"id":"3","job":"Vendeurs-vendeuses","picture":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCF23xn-Ubh300w4wsSwnWgZADuDwoyjU6H1VuRShPdbWcpdrxyhys7WrET4Bd5SDH20EFHFu_UFp6fCzoDoTK1W-Oo75DuY5YLBUB2Jqs39AJQRRkdNmQNDbiHm_hXENTEwGvkc1jBUx0Sl4M2fx8q8Ng6OMA73vfEf8eEOHjhOD_2HqZHbPw4g/s740/vendeuse.webp"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {recrutementList.map((cat, index) => (
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
export default Recrutement;