import './App.scss';

import {
  HashRouter as Router
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <Router>
   <div className='app'>
        <Header isUserLogged={true} logoutUser={() => {}}></Header>
        <Main></Main>
    </div>
  </Router>
);

export default App;
