import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Construction = () => {

    const [constructionList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Plomberie","picture":"https://www.shutterstock.com/image-photo/young-african-male-plumber-repairing-260nw-456824200.jpg"},
        {"id":"2","job":"Menuiserie","picture":"https://media.istockphoto.com/id/1201660231/fr/photo/allons-couper.jpg?s=612x612&w=0&k=20&c=lIvE9WltskxUZ99buBlv4BmUFzHt8jF0-5FaBaB1XVA="},
        {"id":"3","job":"Electricité","picture":"https://lh3.googleusercontent.com/proxy/dM4C0gqV3A7CTlqALkwSZXaiuC-bHWbFtygu_oeZGGtv2_cGSABJ67HbKaGiDGqnKVwrXD2Wef11ptrivFiRYkCqY0zyKuzvD0JVOsidg0A"},
        {"id":"4","job":"Peinture","picture":"https://ichef.bbci.co.uk/images/ic/1024x576/p07fm0gl.jpg"},
        {"id":"5","job":"Maçonnerie","picture":"https://www.shutterstock.com/image-photo/male-african-construction-worker-using-260nw-1961527315.jpg"},
        {"id":"3","job":"Tapisserie","picture":"https://www.lolaplus.org/wp-content/uploads/2022/08/tapissier.webp"},
        {"id":"3","job":"Ferraillage-soudure","picture":"https://www.immobilier-annonce.info/wp-content/uploads/2022/03/ferraillage-dune-dalle-de-beton.jpg"},

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {constructionList.map((cat, index) => (
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
export default Construction;