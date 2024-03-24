import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const CoursParticuliers = () => {

    const [coursParticuliersList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Mathématiques","picture":"https://media.jemepropose.com/offers_pictures/member_885676/offer_3092528/offer_3092528_picture_1032081.png"},
        {"id":"2","job":"Physique et Chimie","picture":"https://i0.wp.com/www.cours-ado.com/wp-content/uploads/2021/12/cours-particuliers-physique-chimie.jpg?resize=1170%2C780&ssl=1"},
        {"id":"3","job":"Informatique-Infographie","picture":"https://job.binfel.com/uploads/posts/yGWQaomfQSXWH5l6RGFQElSy5FfsI6WO934Psypm.jpeg"},
        {"id":"4","job":"Economie Finance Comptabilité","picture":"https://f.maformation.fr/edito/sites/3/2022/04/apprendre-economie.jpeg"},
        {"id":"5","job":"Anglais","picture":"https://www.acs-ami.com/fr/blog/wp-content/uploads/2015/11/apprendre-anglais.jpg"},
        {"id":"6","job":"Developpement personnel","picture":"https://t3.ftcdn.net/jpg/00/92/01/30/240_F_92013034_wxFpIrag5a5vL3SlFNppkawxS6s4iqtU.jpg"},
        {"id":"7","job":"Français","picture":"https://f.maformation.fr/edito/sites/3/2021/09/francais.jpeg"},
        {"id":"8","job":"Langues africaines","picture":"https://cursus.edu/storage/thumbnails/b02324c008054ee3cb6cc48b0e3f2ae3.jpg"},
        {"id":"9","job":"Histoire-Géographie","picture":"https://adymrxvmro.cloudimg.io/v7/sherpas.com/content/uploads/2021/10/histoire-geo-image-scaled.jpg"},
        {"id":"10","job":"Biologie-SVT","picture":"https://www.vivelessvt.com/wp-content/uploads/2014/10/initiatives-svt-des-profs-biologie-g%C3%A9ologie.jpg"}
    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {coursParticuliersList.map((cat, index) => (
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
export default CoursParticuliers;