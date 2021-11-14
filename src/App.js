import "./App.css";
import NavBar from "./components/navBar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/pages/home.jsx";
import { About } from "./components/pages/about.jsx";
import { Blog } from "./components/pages/blog.jsx";
import { Contact } from "./components/pages/contact.jsx";
import Question from "./components/question.jsx";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <NavBar></NavBar>
          <Question></Question>
          <div className="pages">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </div>
        </Router>
      </>
    </div>
  );
}

export default App;
