import './App.css';
import Home from './Components/Pages/Home';
import Navigation from './Components/Navigation/Navigation';
import MovieContextProvider from './Store/MovieContext';
import { Redirect, Route, Switch } from "react-router-dom";
import TvShows from './Components/Pages/TvShows';
import ShowResults from './Components/Pages/ShowResults';
import MovieDetail from './Components/Pages/MovieDetail';

function App() {
  return (
    <MovieContextProvider className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/movieshome" />
        </Route>
        <Route path="/movieshome" exact>
          <Home />
        </Route>
        <Route path="/tvshows" exact>
          <TvShows />
        </Route>
        <Route path="/movieshome/:movieId">
          <MovieDetail />
        </Route>
        <Route path="/tvshows/:showId">
          <MovieDetail />
        </Route>
        <Route path="/showresults">
          <ShowResults />
        </Route>
      </Switch>
    </MovieContextProvider>
  );
}

export default App;
