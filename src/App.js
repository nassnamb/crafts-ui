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
            <Route render={() => <h1>404: page not found</h1>} />
          </Switch>
        </Router>
  );
}

export default App;
