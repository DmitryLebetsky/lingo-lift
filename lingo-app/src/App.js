import './App.scss';

import {
  HashRouter as Router
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Snackbar from './components/Snackbar';

const App = () => (
  <Router>
   <div className='app'>
        <Header isUserLogged={true} logoutUser={() => {}}></Header>
        <Main></Main>
        <Snackbar />
    </div>
  </Router>
);

export default App;
