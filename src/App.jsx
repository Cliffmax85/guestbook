import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Guestbook from "./views/Users/Guestbook";

export default function App() {
  return (
    <Switch>
      <PrivateRoute path='/guestbook'>
        <Guestbook />
      </PrivateRoute>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}
