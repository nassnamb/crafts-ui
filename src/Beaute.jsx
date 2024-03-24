import React, { useEffect, useState } from "react";
import './App.css';
import AppNavbar from "./AppNavbar";
import {Container} from "reactstrap";
import Category from "./Category";

const Beaute = () => {

    const [beauteList, setCoursParticuliersList] = useState([
        {"id":"1","job":"Coiffure homme","picture":"https://app.dylentab.fr/upload/dt_app/photos/prestation_71817.png?20220620124417"},
        {"id":"2","job":"Coiffure femme","picture":"https://resize.elle.fr/original/var/plain_site/storage/images/beaute/cheveux/astuces/comment-prendre-soin-des-tresses-3985180/96001320-1-fre-FR/Comment-prendre-soin-des-tresses.jpg"},
        {"id":"3","job":"Manicure","picture":"https://t3.ftcdn.net/jpg/01/38/25/80/360_F_138258084_PsO1siTuWeMv7xr9urnzVNPyLTvt9eIO.jpg"},
        {"id":"4","job":"Pédicure","picture":"https://www.mediacongo.net/cache/peaunoirepedicure_jpg_711_473_1.jpeg"},
        {"id":"5","job":"Tatouage","picture":"https://www.tatouage-partage.com/sites/default/files/association-tatouage-partage-premiere-ecole-tatouage-afrique-nord.jpg"},
        {"id":"6","job":"Maquillage","picture":"https://capsud.net/wp-content/uploads/2022/08/IMG-20220807-WA0002.jpg"}

    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="CardsContainer">
                    {beauteList.map((cat, index) => (
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
export default Beaute;