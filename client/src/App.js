import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import MyNotes from './screens/MyNotes/MyNotes';


function App() {
  return (
    <div>
      <Header />
      <Routes>

        <React.Fragment>



          {/* <main className="App"> */}

            <Route path="/" element={<LandingPage/>} />
            <Route path="/mynotes" element={<MyNotes/>} />

          {/* </main> */}


        </React.Fragment>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
