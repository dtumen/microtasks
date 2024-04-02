import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

type FullInputPropsType = {
  addMessage: (newMessage: string) => void;
}

export const FullInput: React.FC<FullInputPropsType> = ({addMessage}) => {

  const [titile, setTitle] = useState('');

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
  
  const onClickButtonHandler = () => {
    addMessage(titile);
    setTitle('');
  }

  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickButtonHandler();
    }
  }

  return (
    <div>
      <input type="text"
        onChange={onChangeInputHandler}
        value={titile}
        onKeyDown={onKeyDownHandler}
      />
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};