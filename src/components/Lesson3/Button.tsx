import React from 'react';

type ButtonPropsType = {
  title: string
  onClickAddBtn: (mess: string) => void
}

export const Button: React.FC<ButtonPropsType> = ({title, onClickAddBtn}) => {
  return (
    <button onClick={() => onClickAddBtn(title)}>+</button>
  );
};