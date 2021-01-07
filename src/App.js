import './App.css';
import HomePage from './pages/HomePage';
import SongPage from './pages/SongPage';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route, Switch, withRouter} from 'react-router-dom';

function App(props) {


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' render={(props) =>
        <HomePage />} />
        <Route exact path='/songs' render={(props) => 
        <SongPage />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default withRouter(App);
