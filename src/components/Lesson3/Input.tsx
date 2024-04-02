import React, { ChangeEvent } from 'react';

type InputPropsType = {
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void
  input: string
}

export const Input: React.FC<InputPropsType> = ({ inputHandler, input }) => {
  return (
    <input type="text" 
    onChange={inputHandler}
    value={input}
    />
  );
};