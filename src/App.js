import logo from './logo.svg';
import StarWarsCharacter from './views/StarWarsCharacters';
import StarWarsProfile from './views/StarWarsProfile';
import Landing from './views/Landing';
import Contact from './views/Contact';

//import 'bootstrap/scss/bootstrap.scss';
import './App.css';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">All Characters</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    <div className="containerCard">
      <Routes>
        <Route path="/" element={<Landing/> }/>
        <Route path="/characters" element={<StarWarsCharacter/> }/>
        <Route path="/characters/:id" element={<StarWarsProfile/> }/>
        <Route path="/contact" element={<Contact/> }/>
      </Routes>
        {/* <StarWarsCharacter/> */}
    </div>
    </>
  );
}

export default App;
