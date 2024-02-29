import React from 'react';
import './App.css';
import { Header } from './site/Header';
import { Footer } from './site/Footer';
import { Body } from './site/Body';
import { NewComponent } from './site/NewComponent';
import { Button } from './site/Button';
import { NewButton } from './site/NewButton';

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

  const onClickHandler = (name: string) => {
    console.log(`Hellow, I'm ${name}`)
  }

  const foo1 = () => {
    console.log(100200)
  }

  const foo2 = (num: number) => {
    console.log('foo2:', num)
  }

  return (
    <>
    <NewButton btnName={'exercise2-button1'} btnColor={'lightblue'}/>
    <NewButton btnName={'exercise2-button2'} btnColor={'lightgreen'}/>
    <Button onClickHandler={onClickHandler} name='Tumen!' nameBtn={'MyYoutubeChannel-1'}/>
    <Button onClickHandler={onClickHandler} name='Ivan!' nameBtn={'MyYoutubeChannel-2'} />
    <button onClick={foo1}>1</button>
    <button onClick={() => foo2(100200)}>2</button>
    <Header titleForHeader={'NEW Header'} />
    <Body titleForBody={'NEW BODY'}/>
    <Footer titleForFooter={'NEW FOOTER'} />
    <NewComponent students={students}/>
    </>
  );
}

export default App;
