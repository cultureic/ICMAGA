import React, { useState } from 'react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid';


const tokens = [
  { symbol: 'ICMAGA', name: 'ICMAGA', balance: 1.5 },
  { symbol: 'ICP', name: 'ICP', balance: 10 },
  { symbol: 'Wumbo', name: 'Wumbo', balance: 1000 },
  // Add more tokens as needed
];

const TokenSwap = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [isFromToken, setIsFromToken] = useState(true);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const openModal = (fromToken) => {
    setIsFromToken(fromToken);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectToken = (token) => {
    if (isFromToken) setFromToken(token);
    else setToToken(token);
    closeModal();
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-6 bg-white dark:bg-jacarta-900 shadow-lg rounded-2xl absolute inset-0 m-auto w-full h-96 mt-20">
      <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-jacarta-600 hover:text-gray-900 dark:hover:text-white rounded-lg text-sm p-1.5 inline-flex items-center"
              onClick={()=>{onClose()}}
            >
              <XIcon className="w-5 h-5" />
            </button>
      
        <div className="space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Token Swap</h1>

          <div className="space-y-4">
            {/* From Token Input */}
            <div className="relative p-6 border border-gray-300 dark:border-jacarta-600 rounded-lg shadow-sm bg-light-base dark:bg-jacarta-800">
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{fromToken.symbol}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Balance: {fromToken.balance}</div>
                </div>
                <button
                  type="button"
                  onClick={() => openModal(true)}
                  className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark"
                >
                  Select <ChevronDownIcon className="h-5 w-5 ml-1" />
                </button>
              </div>
              <input
                type="number"
                placeholder="0.0"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="mt-4 w-full dark:bg-jacarta-900 text-lg font-medium remove-arrow border-transparent no-spinner no-outline focus:outline-none focus:border-transparent focus:ring-0 selection:border-transparent dark:text-white"
              />
            </div>

            {/* To Token Input */}
            <div className="relative p-6 border border-gray-300 dark:border-jacarta-600 rounded-lg shadow-sm bg-light-base dark:bg-jacarta-800">
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{toToken.symbol}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Balance: {toToken.balance}</div>
                </div>
                <button
                  type="button"
                  onClick={() => openModal(false)}
                  className="inline-flex items-center px-3 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark"
                >
                  Select <ChevronDownIcon className="h-5 w-5 ml-1" />
                </button>
              </div>
              <input
                type="number"
                placeholder="0.0"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="mt-4 w-full dark:bg-jacarta-900 border-none text-lg font-medium focus:outline-none dark:text-white"
              />
            </div>
          </div>

          <button className="w-full py-4 mt-6 font-medium text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700">
            Swap
          </button>
        </div>
      </div>

      {/* Token Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="relative bg-white dark:bg-jacarta-700 p-6 rounded-lg shadow-lg z-10 w-full max-w-md mx-auto">
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-jacarta-600 hover:text-gray-900 dark:hover:text-white rounded-lg text-sm p-1.5 inline-flex items-center"
              onClick={closeModal}
            >
              <XIcon className="w-5 h-5" />
            </button>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Select a Token</h3>
            </div>
            <div>
              {tokens.map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => selectToken(token)}
                  className="w-full text-left px-4 py-2 mt-2 bg-gray-100 dark:bg-jacarta-600 rounded-lg hover:bg-gray-200 dark:hover:bg-jacarta-500"
                >
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{token.symbol}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{token.name}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TokenSwap;






