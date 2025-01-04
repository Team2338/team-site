import './App.scss';
import FullLanding from "./pages/Landing-Page/Landing-Compiled.jsx";
  import Sponsors from './pages/Sponsors-Page/Sponsors-Compiled.jsx';
  import Subteams from "./pages/SubTeams-Page/Subteams-Compiled.jsx";
  import Outreach from "./pages/Outreach-Page/Outreach-Compilied.jsx";
  import Robots from "./pages/Robots-Page/Robots.jsx";
  import NotFound from "./components/NotFound-Error/NotFound.jsx";
  import Navbar from "./components/Navbar-Component/Navbar.jsx";
  import Footer from "./components/Footer-Component/Footer.jsx";
  import Contact from "./pages/Contact-Page/Contact-Compiled.jsx";
  import Resources from "./pages/Resources-Page/Resources.jsx";
// import {useEffect} from "react";

function App() {

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = FullLanding;
      break;
    case "/subteams":
      Component = Subteams;
      break;
    case "/outreach":
      Component = Outreach;
      break;
    case "/robots":
      Component = Robots;
      break;
    case "/sponsors":
      Component = Sponsors;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/resources":
      Component = Resources;
      break;
    default:
      Component = NotFound;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Component />
        <Footer />
      </div>
    </div>
  );
}

export default App;