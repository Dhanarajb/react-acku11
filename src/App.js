import React from 'react';
import './style.css';
import HOC from './HOC';
function App({ value }) {
  console.log(value);
  return (
    <div>
      <h1>{value.name}</h1>
    </div>
  );
}
export default HOC(App);
