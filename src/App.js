import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter( counter + 1); 

  // const handleAdd = () => setCounter(prevValue => prevValue + 1); 

  return (
    <>
      <h1>Licznik </h1>
      <button onClick={handleAdd}>Add</button>
      <p>{counter}</p>
    </>
  );
}

export default App;
