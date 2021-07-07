import logo from "./logo.svg";
import "./App.css";
import TopHeader from "./Components/Header/TopHeader";
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Men from "./Components/Header/Home/Men";
import Women from "./Components/Header/Home/Women";
import Login from "./Components/Header/Home/Login";
import Footer from "./Components/Header/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <TopHeader />
        <Navbar />
        <Switch>
          <Route path="/Men">
            <Men />
            
          </Route>
          <Route path="/Women">
            <Women />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/">
            <Men />
            
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
