import { useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{count}</h1>
        <button onClick={() => setCount(e => e + 1)}>Add</button>
      </header>
    </div>
  );
}

export default App;
