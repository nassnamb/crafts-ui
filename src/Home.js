import React, {useState} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Container} from "reactstrap";
import Category from "./components/Category";
import styled from "styled-components";

const Home = () => {

    const [categoryList, setCategoryList] = useState([
        {"id":"1","job":"Cours particuliers","picture":"https://media.istockphoto.com/id/1034464980/fr/photo/m%C3%A8re-aider-sa-fille-%C3%A0-faire-ses-devoirs.jpg?s=2048x2048&w=is&k=20&c=q5-kDZHkPatNJzWpOi6GTc2Ik52hlmzdJoAhp8FkKzM="},
        {"id":"2","job":"Aide à domicile","picture":"https://img.freepik.com/vecteurs-libre/boite-outils-pour-reparation-maison-bricolage_1284-6316.jpg?w=1380&t=st=1707687860~exp=1707688460~hmac=8154dd030e03dcf230273e6adb30aa6d20e9213d4e71c0d963f744612f3c79fb"},
        {"id":"3","job":"Informatique","picture":"https://www.nowteam.net/wp-content/uploads/2016/12/productivit%C3%A9-en-entreprise-1080x675.jpg"},
        {"id":"4","job":"Enfants","picture":"https://img.freepik.com/vecteurs-libre/boite-outils-pour-reparation-maison-bricolage_1284-6316.jpg?w=1380&t=st=1707687860~exp=1707688460~hmac=8154dd030e03dcf230273e6adb30aa6d20e9213d4e71c0d963f744612f3c79fb"},
        {"id":"5","job":"Santé","picture":"https://www.malakoffhumanis.com/sites/smile/files/styles/editorial_page_top_image_desktop/public/images/2021-162-mh-photo-centre-de-sante-missions-fonctionnement-gi-1221713778-1024x577.jpg?itok=r6-7_e4D"},
        {"id":"6","job":"Livraison","picture":"https://akanea.com/wp-content/uploads/2021/06/Illustration-livraison-urbaine-e-commerce.png"},
        {"id":"4","job":"Sports","picture":"https://www.consoglobe.com/wp-content/uploads/2017/08/deux-sports.jpg.webp"},
        {"id":"5","job":"Recrutement","picture":"https://media.ouest-france.fr/v1/pictures/bc6daa8c82596951d35b264a66a50233-recrutement-efficace.png"},
        {"id":"6","job":"Evènementiel","picture":"https://img.freepik.com/vecteurs-libre/boite-outils-pour-reparation-maison-bricolage_1284-6316.jpg?w=1380&t=st=1707687860~exp=1707688460~hmac=8154dd030e03dcf230273e6adb30aa6d20e9213d4e71c0d963f744612f3c79fb"},
        {"id":"6","job":"Construction","picture":"https://media.istockphoto.com/id/1458002636/fr/photo/travailleurs-de-la-construction-dans-le-chantier.webp?b=1&s=170667a&w=0&k=20&c=j60VtIcARm3bx6YilcaB_rDIvkrPrkqfdkNT8WEkEGY="},
        {"id":"4","job":"Beauté","picture":"https://www.professionbienetre.fr/wp-content/uploads/2021/06/BEAUTE-MULTIRACIALE-.jpg"},
        {"id":"5","job":"Nettoyage","picture":"https://img.passeportsante.net/1200x675/2023-03-27/nettoyage.webp"},
        {"id":"6","job":"Logistique transport","picture":"https://kmcl.fr/sites/default/files/styles/header_offre/public/medias/mon-metier-mes-usages-transport-et-logistique-3.jpg?itok=ux7X7vSh"},
    ]);

    const CardsContainer = styled.div`
      display: grid;
      gap: 24px;
      grid-template-rows: 350px 350px;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-items: center;
`

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div className="float-right">
                    <CardsContainer>
                        {categoryList.map((cat, index) => (
                            <Category
                                key={`${cat.job}-${index}`}
                                label={cat.job}
                                picture={cat.picture}
                            />
                        ))}
                    </CardsContainer>
                </div>
            </Container>
        </div>
    );

}
export default Home;