import React, {useState} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Input } from 'antd';
import { Container} from 'reactstrap';
import coursParticuliers from "./assets/coursParticuliers.jpg";
import informatique from "./assets/informatique.jpg";
import sante from "./assets/sante.jpg";
import construction from "./assets/contruction.jpg";
import sports from "./assets/sport.jpg";
import beaute from "./assets/beaute.jpg";
import aideDomicile from "./assets/aideDomicile.jpg";
import livraison from "./assets/livraison.jpg";
import evenementiel from "./assets/evenementiel.jpg";
import nettoyage from "./assets/nettoyage.jpg";
import logistique from "./assets/logistique.jpg";
import recrutement from "./assets/recrutement.jpg";
import Category from "./Category";
import {Link} from "react-router-dom";


const { Search } = Input;


const Home = () => {

    const [categoryList, setCategoryList] = useState([
        {"id":"1","job":"Cours particuliers","picture":coursParticuliers},
        {"id":"2","job":"Aide à domicile","picture":aideDomicile},
        {"id":"3","job":"Informatique","picture":informatique},
        {"id":"4","job":"Santé","picture":sante},
        {"id":"5","job":"Livraison","picture":livraison},
        {"id":"6","job":"Sports","picture":sports},
        {"id":"7","job":"Recrutement","picture":recrutement},
        {"id":"8","job":"Evènementiel","picture":evenementiel},
        {"id":"9","job":"Construction","picture":construction},
        {"id":"10","job":"Beauté","picture":beaute},
        {"id":"11","job":"Nettoyage","picture":nettoyage},
        {"id":"12","job":"Logistique transport","picture":logistique},
    ]);

    const onChange = (e) => {
    };

    const onSearch = (value, _e, info) => console.log(info?.source, value);


    return (
        <div>
            <AppNavbar />
            <br /><br /><br />
            <div className="center-container">
                <Search placeholder="Faites votre recherche" allowClear enterButton="Search" size="large" onSearch={onSearch}/>
            </div>
            <br /><br /><br />
            <Container fluid>
                <div>
                    <div className="CardsContainer">
                        {categoryList.map((cat, index) => {
                            let toPath = '/';
                            if (cat.id === "1") {
                                toPath = '/cours-particuliers';
                            } else if (cat.id === "2") {
                                toPath = '/aide-domicile';
                            } else if (cat.id === "3") {
                                toPath = '/informatique';
                            } else if (cat.id === "4") {
                                toPath = '/sante';
                            } else if (cat.id === "5") {
                                toPath = '/livraison';
                            } else if (cat.id === "6") {
                                toPath = '/sports';
                            } else if (cat.id === "7") {
                                toPath = '/recrutement';
                            } else if (cat.id === "8") {
                                toPath = '/evenementiel';
                            } else if (cat.id === "9") {
                                toPath = '/construction';
                            } else if (cat.id === "10") {
                                toPath = '/beaute';
                            } else if (cat.id === "11") {
                                toPath = '/nettoyage';
                            } else if (cat.id === "12") {
                                toPath = '/logistique-transport';
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
export default Home;