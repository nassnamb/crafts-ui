import React, { useEffect, useState } from "react";
import '../App.css';
import AppNavbar from "../AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const AideDomicile = () => {

    const [aideDomicileList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Babysitting","picture":"https://media.istockphoto.com/id/1289084512/fr/photo/jaime-mes-petits-enfants.jpg?s=612x612&w=0&k=20&c=NIDcYJefPbJiDLQS1WeYj3imLf3wmdowoK7X2VLHl-A="},
        {"id":"2","job":"cuisine","picture":"https://media.istockphoto.com/id/1301815523/fr/photo/femme-noire-afro-am%C3%A9ricaine-cuisine-de-cuisine-cuisine-cuisine-pr%C3%A9parant-le-d%C3%AEner-luch-petit.jpg?s=612x612&w=0&k=20&c=Wgp7E4fEYl9oN8Wp_oeSeGwP02MvMqPg_e70Oa_N-tc="},
        {"id":"3","job":"Course/shopping","picture":"https://www.un.org/africarenewal/sites/www.un.org.africarenewal/files/african-consumers.jpg"},
        {"id":"4","job":"Blanchisserie","picture":"https://entre-nous-entrepreneurs.com/wp-content/uploads/2023/05/combien-rapporte-un-pressing-en-afrique.jpg"},
        {"id":"5","job":"Agent de sécurité","picture":"https://www.formation-insertion.com/wp-content/uploads/2021/03/bir-home-1200x800-1.jpg"},
        {"id":"6","job":"Aide aux travaux domestiques","picture":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH0u1VTDVwn1cxd_ExpzjrYIxuyI7yJFYqz6NvmlKIA&s"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {aideDomicileList.map((cat, index) => (
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
export default AideDomicile;