import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileListPage from './ProfileListPage';
import ProfileEdit from './ProfileEdit';
import ProfileDetails from './ProfileDetails';
import ProfileMenu from './menu/ProfileMenu';
import UserMenu from './menu/UserMenu';
import UserListPage from './UserListPage';
import UserDetails from './UserDetails';
import UserEdit from './UserEdit';
import CoursParticuliers from './CoursParticuliers';
import logistiqueTransport from "./LogistiqueTransport";
import Sante from "./Sante";
import Livraison from "./Livraison";
import AideDomicile from "./AideDomicile";
import Informatique from "./Informatique";
import Sports from "./Sports";
import Recrutement from "./Recrutement";
import Evenementiel from "./Evenementiel";
import Construction from "./Construction";
import Beaute from "./Beaute";
import Nettoyage from "./Nettoyage";

function App() {
  return (
    <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/profile' exact={true} component={ProfileMenu}/>
            <Route path='/user' exact={true} component={UserMenu}/>
            <Route path='/profiles' exact={true} component={ProfileListPage}/>
            <Route path='/users' exact={true} component={UserListPage}/>
            <Route path='/profiles/details' exact={true} component={ProfileDetails}/>
            <Route path='/users/details' exact={true} component={UserDetails}/>
            <Route path='/profiles/:id' component={ProfileEdit}/>
            <Route path='/users/:id' exact={true} component={UserEdit}/>
            <Route path='/cours-particuliers' exact={true} component={CoursParticuliers}/>
            <Route path='/aide-domicile' exact={true} component={AideDomicile}/>
            <Route path='/informatique' exact={true} component={Informatique}/>
            <Route path='/sante' exact={true} component={Sante}/>
            <Route path='/livraison' exact={true} component={Livraison}/>
            <Route path='/sports' exact={true} component={Sports}/>
            <Route path='/recrutement' exact={true} component={Recrutement}/>
            <Route path='/evenementiel' exact={true} component={Evenementiel}/>
            <Route path='/construction' exact={true} component={Construction}/>
            <Route path='/beaute' exact={true} component={Beaute}/>
            <Route path='/nettoyage' exact={true} component={Nettoyage}/>
            <Route path='/aide-domicile' exact={true} component={AideDomicile}/>
            <Route path='/logistique-transport' exact={true} component={logistiqueTransport}/>
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </Router>
  );
}

export default App;
