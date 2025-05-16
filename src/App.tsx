import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import init, { test, reverse_rust } from "./wasm/rust_core";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<number | null>(null);

  function reverseJS(s: string): string {
    return s.split("").reverse().join("");
  }

  const benchmark = () => {
    console.log(123);
    const input = "abcdefghijklmnopqrstuvwxyz".repeat(1100000);

    const jsStart = performance.now();
    reverseJS(input);
    const jsEnd = performance.now();

    const rustStart = performance.now();
    reverse_rust(input);
    const rustEnd = performance.now();

    console.log(`JS Time: ${jsEnd - jsStart} ms`);
    console.log(`Rust (WASM) Time: ${rustEnd - rustStart} ms`);
  };

  useEffect(() => {
    init().then(() => {
      // const result = double(10000000000);
      // setValue(result);
      benchmark();
      const result = test("1123");
      console.log("typeof result :>> ", typeof result);
      setValue(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>21 x 2 = {value}</div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
