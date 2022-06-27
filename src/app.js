/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
/* eslint-disable react/jsx-filename-extension */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/landing';
import Playlist from './pages/playlist';
import './index.css';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/playlist">
          <Playlist />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
