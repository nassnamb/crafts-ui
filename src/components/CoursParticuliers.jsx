import React, { useEffect, useState } from "react";
import AppNavbar from "../AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const CoursParticuliers = () => {

    const [coursParticuliersList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Maths","picture":"https://media.jemepropose.com/offers_pictures/member_885676/offer_3092528/offer_3092528_picture_1032081.png"},
        {"id":"2","job":"Physique et Chimie","picture":"https://i0.wp.com/www.cours-ado.com/wp-content/uploads/2021/12/cours-particuliers-physique-chimie.jpg?resize=1170%2C780&ssl=1"},
        {"id":"3","job":"Informatique","picture":"https://job.binfel.com/uploads/posts/yGWQaomfQSXWH5l6RGFQElSy5FfsI6WO934Psypm.jpeg"},
    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div>
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