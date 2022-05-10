import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Guestbook from "./views/Users/Guestbook";

export default function App() {
  return (
    <Switch>
      <Route path='/login'>
        <Login />
      </Route>
      <PrivateRoute path='/guestbook'>
        <Guestbook />
      </PrivateRoute>
      <PrivateRoute path='/'>
        <Home />
      </PrivateRoute>
    </Switch>
  );
}
