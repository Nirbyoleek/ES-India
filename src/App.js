import "./App.css";
import MainPage from "./components/LandingPage/mainPage/mainPage";
import OurTeam from "./components/our team/ourTeam";
import ContactUs from "./components/Contact Us/contactUs";
import {BrowserRouter as Router, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={MainPage} />  
        <Route path="/Ourteam" component={OurTeam} /> 
        <Route path="/ContactUs" component={ContactUs} /> 
      </Router>
      </div>
  );
}

export default App;
