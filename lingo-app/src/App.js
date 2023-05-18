import './App.scss';

import {
  HashRouter as Router,
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import Snackbar from './components/Snackbar';
import Loader from './components/Loader';

import { useSelector } from 'react-redux';

const App = () => {
  const isLoading = useSelector(state => state.loadingManager.isLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <Router>
     <div className='app'>
          <Header />
          <Main />
          <Snackbar />
      </div>
    </Router>
  )
};

export default App;
