
import './App.css';
import Pokelist from './pages/pokelist';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact'
import Details from './pages/details';
// import LandingPage from './pages/landing';


import React from 'react';
import Notfound from './pages/notfound';






function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Principal />}></Route> */}
          {/* <Route path="/LandingPage" element={<LandingPage />}></Route> */}

          <Route path="/" element={<Pokelist></Pokelist>}></Route>
          <Route path="contacto" element={<Contact />}></Route>
          <Route path="/details/:id" element={<Details></Details>}></Route>
          <Route
            path="/details/:id/:name"
            element={<Details></Details>}
          ></Route>
          <Route path="/*" element={<Notfound></Notfound>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
