import React from 'react';
const HOC = (Component) => {
  const obje = {
    name: 'Dhanu',
    age: 26,
  };
  return (
    <div>
      <Component value={obje} />
    </div>
  );
};
export default HOC;
