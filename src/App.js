import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  function fef() {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((re) => {
        setList(re.list);
        // setError(false)
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        // setList([])
        // setLoading(false)
      });
  }
  useEffect(() => {
    fef();
  });
  return (
    <div>
      <table border="2">
        <tr>
          <th>Name</th>
        </tr>
        {list.map((val) => {
          return (
            <tr>
              <td>{val.name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
