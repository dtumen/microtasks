import React from 'react';

type BodyPropsType = {
  titleForBody: string
}

export const Body = ({ titleForBody }: BodyPropsType) => {
  return (
    <div>{titleForBody}</div>
  );
};