import React from 'react';
import './App.css';
import { Header } from './site/Header';
import { Footer } from './site/Footer';
import { Body } from './site/Body';

function App() {
  return (
    <>
    <Header titleForHeader={'NEW Header'} />
    <Body titleForBody={'NEW BODY'}/>
    <Footer titleForFooter={'NEW FOOTER'} />
    </>
  );
}

export default App;
