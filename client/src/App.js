import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';

function App() {
  return (
    <>
    <div className="App">
     <Header/>
        <main>
          <LandingPage></LandingPage>
        </main>
     <Footer/>
    </div>
    </>
  );
}

export default App;
