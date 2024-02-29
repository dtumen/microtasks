import React, { useState } from 'react';

type NewButtonPropsType = {
  btnName: string
  btnColor?: string
}


const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
const randomByte = () => randomNumber(0, 255)
const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2)
const randomCssRgba = () => `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`

export const NewButton = ({ btnName, btnColor }: NewButtonPropsType) => {

  const [backColor, setBackColor] = useState(btnColor);

  const onClickHandler = () => {
    let colRandom =  randomCssRgba();
    setBackColor(colRandom)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button style={{ 
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: backColor || 'transparent',
      }}
      onClick={onClickHandler}
      >
        { btnName }
      </button>
    </div>
  );
};
