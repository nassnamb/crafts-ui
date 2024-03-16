import React, {useState} from 'react';
import AppNavbar from './AppNavbar';
import { Container} from "reactstrap";
import Category from "./components/Category";
import {Link} from "react-router-dom";

const Home = () => {
    const [categoryList, setCategoryList] = useState([
        {"id":"1","job":"Cours particuliers","picture":"https://media.istockphoto.com/id/1034464980/fr/photo/m%C3%A8re-aider-sa-fille-%C3%A0-faire-ses-devoirs.jpg?s=2048x2048&w=is&k=20&c=q5-kDZHkPatNJzWpOi6GTc2Ik52hlmzdJoAhp8FkKzM="},
        {"id":"2","job":"Aide à domicile","picture":"https://st2.depositphotos.com/13193658/47011/i/450/depositphotos_470113266-stock-photo-smiling-social-worker-hugging-shoulder.jpg"},
        {"id":"3","job":"Informatique","picture":"https://www.nowteam.net/wp-content/uploads/2016/12/productivit%C3%A9-en-entreprise-1080x675.jpg"},
        {"id":"4","job":"Enfants","picture":"https://www.shutterstock.com/shutterstock/photos/2172069263/display_1500/stock-photo-bunch-of-cheerful-joyful-cute-little-children-playing-together-and-having-fun-group-portrait-of-2172069263.jpg"},
        {"id":"5","job":"Santé","picture":"https://www.malakoffhumanis.com/sites/smile/files/styles/editorial_page_top_image_desktop/public/images/2021-162-mh-photo-centre-de-sante-missions-fonctionnement-gi-1221713778-1024x577.jpg?itok=r6-7_e4D"},
        {"id":"6","job":"Livraison","picture":"https://img-0.journaldunet.com/mblxiSWMJrGOVxqe3oBiURg8Lq0=/1500x/smart/7811b580cb65444aaac7bafef239e78b/ccmcms-jdn/2049212.jpg"},
        {"id":"4","job":"Sports","picture":"https://www.consoglobe.com/wp-content/uploads/2017/08/deux-sports.jpg.webp"},
        {"id":"5","job":"Recrutement","picture":"https://media.ouest-france.fr/v1/pictures/bc6daa8c82596951d35b264a66a50233-recrutement-efficace.png"},
        {"id":"6","job":"Evènementiel","picture":"https://media.gettyimages.com/id/1207062016/fr/photo/public-applaudissant-dans-le-th%C3%A9%C3%A2tre.jpg?s=612x612&w=gi&k=20&c=fkFADxeycMOPNwebmdYmih8yPxeY7QUUnCUjXS-WRBQ="},
        {"id":"6","job":"Construction","picture":"https://media.istockphoto.com/id/1458002636/fr/photo/travailleurs-de-la-construction-dans-le-chantier.webp?b=1&s=170667a&w=0&k=20&c=j60VtIcARm3bx6YilcaB_rDIvkrPrkqfdkNT8WEkEGY="},
        {"id":"4","job":"Beauté","picture":"https://www.professionbienetre.fr/wp-content/uploads/2021/06/BEAUTE-MULTIRACIALE-.jpg"},
        {"id":"5","job":"Nettoyage","picture":"https://img.passeportsante.net/1200x675/2023-03-27/nettoyage.webp"},
        {"id":"6","job":"Logistique transport","picture":"https://img.freepik.com/photos-premium/transport-logistique-conteneurs-cargo-avion-cargo-rendu-illustration-3d_37416-487.jpg?w=360"},
    ]);

    return (
        <div>
            <AppNavbar /><br/>
            <Container fluid>
                <div>
                    <div className="CardsContainer">
                        {categoryList.map((cat, index) => (
                            <Link key={`${cat.job}-${index}`} to={cat.id === "1" ? '/cours-particuliers' : '/'}>
                                <Category
                                    label={cat.job}
                                    picture={cat.picture}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Home;