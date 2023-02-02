import React from 'react';
const HOC = (Component) => {
  const obj = {
    name: 'Dhanu',
    age: 26,
  };
  return ()=><Component value={obj} />
};
export default HOC;
