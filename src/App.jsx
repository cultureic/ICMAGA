import Page from "./app/page";
import TokenSwap from "./components/Swap/Swap";


import React, { useState } from 'react';

const SlotMachine = () => {
  const [result, setResult] = useState(['🍒', '🍋', '🍊']);
  const [spinning, setSpinning] = useState(false);
  const symbols = ['🍒', '🍋', '🍊', '🍉', '🍇', '🍓'];

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      const newResult = [
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ];
      setResult(newResult);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="p-6 bg-light-base dark:bg-jacarta-800 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Slot Machine</h2>
      <div className="flex justify-center my-4 text-5xl">
        {result.map((symbol, index) => (
          <div key={index} className={`mx-2 ${spinning ? 'animate-spinReel' : ''}`}>
            {symbol}
          </div>
        ))}
      </div>
      <button
        onClick={spin}
        className="w-full py-4 font-medium text-white bg-accent rounded-lg shadow-md hover:bg-accent-dark"
      >
        Spin
      </button>
    </div>
  );
};









function App() {
  return (
    <>
     <Page/>
    </>
  );
}

export default App;
