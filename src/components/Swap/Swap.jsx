import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid';

const tokens = [
  { symbol: 'ETH', name: 'Ethereum', balance: 1.5 },
  { symbol: 'BNB', name: 'Binance Coin', balance: 10 },
  { symbol: 'USDT', name: 'Tether', balance: 1000 },
  // Add more tokens as needed
];

const TokenSwap = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState(tokens[1]);
  const [isFromToken, setIsFromToken] = useState(true);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const openModal = (fromToken) => {
    setIsFromToken(fromToken);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);
  const selectToken = (token) => {
    if (isFromToken) setFromToken(token);
    else setToToken(token);
    closeModal();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-jacarta-900 shadow-lg rounded-2xl">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Token Swap</h1>

        <div className="space-y-4">
          {/* From Token Input */}
          <div className="relative p-6 border border-gray-300 dark:border-jacarta-600 rounded-lg shadow-sm bg-light-base dark:bg-jacarta-800">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">From</label>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{fromToken.symbol}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{fromToken.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Balance: {fromToken.balance}</div>
              </div>
              <button
                type="button"
                onClick={() => openModal(true)}
                className="inline-flex items-center px-3 py-2 border border-transparent  rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark"
              >
                Select <ChevronDownIcon className="h-5 w-5 ml-1" />
              </button>
            </div>
            <input
              type="number"
              placeholder="Amount"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="mt-4 w-full bg-light-base text-lg font-medium remove-arrow border-transparent no-spinner no-outline focus:outline-none focus:border-transparent focus:ring-0 selection:border-transparent  dark:text-white"
            />
          </div>

          {/* To Token Input */}
          <div className="relative p-6 border border-gray-300 dark:border-jacarta-600 rounded-lg shadow-sm bg-light-base dark:bg-jacarta-800">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">To</label>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">{toToken.symbol}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{toToken.name}</div>
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
              placeholder="Amount"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="mt-4 w-full bg-light-base border-none text-lg font-medium focus:outline-none dark:text-white"
            />
          </div>
        </div>

        <button className="w-full py-4 mt-6 font-medium text-white bg-green-500 rounded-lg shadow-md hover:bg-green-700">
          Swap
        </button>
      </div>

      {/* Token Selection Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-jacarta-700 shadow-xl rounded-2xl">
                  <div className="flex justify-between items-center">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Select a Token
                    </Dialog.Title>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-jacarta-600 hover:text-gray-900 dark:hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      onClick={closeModal}
                    >
                      <XIcon className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="mt-4">
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default TokenSwap;
