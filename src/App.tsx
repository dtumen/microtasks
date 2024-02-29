import React from 'react';
import './App.css';
import { Header } from './site/Header';
import { Footer } from './site/Footer';
import { Body } from './site/Body';
import { NewComponent } from './site/NewComponent';

const students = [
  {
    id: 1,
    name: 'Tumen',
    age: 32,
  },
  {
    id: 2,
    name: 'Aldar',
    age: -1,
  },
  {
    id: 3,
    name: 'Ruslan',
    age: 322,
  },
  {
    id: 4,
    name: 'Elnur',
    age: 122,
  },
  {
    id: 5,
    name: 'Vasiliy',
    age: 2,
  }
]

function App() {
  return (
    <>
    <Header titleForHeader={'NEW Header'} />
    <Body titleForBody={'NEW BODY'}/>
    <Footer titleForFooter={'NEW FOOTER'} />
    <NewComponent students={students}/>
    </>
  );
}

export default App;
