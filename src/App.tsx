import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Money from './components/Money/Money';
import { FullInput } from './components/Lesson3/FullInput';
import { Input } from './components/Lesson3/Input';
import { Button } from './components/Lesson3/Button';


function App() {

  const [response, setResponse] = useState([
    { message: 'message1' },
    { message: 'message2' },
    { message: 'message3' },
  ])

  const addMessage = (newMessage: string) => {
    setResponse([{ message: newMessage }, ...response]);
  }

  // 2:
  const [input, setInput] = useState('');

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value)
  };

  const onClickAddBtn = (mess: string) => {
    setResponse([...response, {message: input}]);
    setInput('');
  }

  return (
    <>
      <div>
        <Money />
      </div>

      <h2>Lesson 3</h2>
      <div>
        <FullInput addMessage={addMessage}/>

        { 
          response.map((el, index) => <div key={index}> {el.message} </div>)
        }

        <Input inputHandler={inputHandler} input={input}/>
        <Button title={input} onClickAddBtn={onClickAddBtn}/>
      </div>
    </>
  );
}

export default App;
