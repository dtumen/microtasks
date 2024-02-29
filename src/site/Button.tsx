import React from 'react';

type ButtonPropsType = {
  onClickHandler: (name: string) => void
  name: string
  nameBtn: string
}

export const Button = ({ onClickHandler, name, nameBtn }: ButtonPropsType) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <button 
      style={{ padding: '20px', borderRadius: '10px' }}
      onClick={() => onClickHandler(name)}
      >
        { nameBtn }
      </button>
    </div>
  );
};

