import { useState } from 'react';

import { SomeComponent } from './features/SomeComponent';
import { SomeInlineComponent } from './features/SomeInlineComponent';

import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>NX Vitest 4 v8 Coverage Inline Example</h1>
      <div className="card">
        <SomeComponent />
        <SomeInlineComponent />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
