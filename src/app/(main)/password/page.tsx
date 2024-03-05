'use client'
import { useState } from "react";
import { generate } from "generate-password";

export default function PasswordGenaratePage() {
  const [password, setPassword] = useState('Genera tu password!!');
  const [copied, setCopied] = useState(false);
  const [lengthCharacter, setLengthCharacter] = useState(20);
  const [isNumberChecked, setIsNumberChecked] = useState(true);
  const [isLowercaseChecked, setIsLowercaseChecked] = useState(true);
  const [isUppercaseChecked, setIsUppercaseChecked] = useState(true);
  const [isSymbolsChecked, setIsSymbolsChecked] = useState(true);
  
  const handlerGenaretor = () => {
    const generator = generate({
      length: lengthCharacter,
      numbers: isNumberChecked,
      lowercase: isLowercaseChecked,
      uppercase: isUppercaseChecked,
      symbols: isSymbolsChecked,
    });
    setPassword(generator);
    setCopied(false);
  }

  const handlerCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (password !== "Genera tu password!!") {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setCopied(true);
        })
        .catch((err) => {
          console.error("Error copying to clipboard:", err);
        });
    }
  };

  const handleOnChangeNumber = () => {
    if (!isLowercaseChecked && !isUppercaseChecked && !isSymbolsChecked) {
      return;
    }
    setIsNumberChecked(!isNumberChecked);
  };

  const handleOnChangeLowercase = () => {
    if (!isNumberChecked && !isUppercaseChecked && !isSymbolsChecked) {
      return;
    }
    setIsLowercaseChecked(!isLowercaseChecked);
  };

  const handleOnChangeUppercase = () => {
    if (!isNumberChecked && !isLowercaseChecked && !isSymbolsChecked) {
      return;
    }
    setIsUppercaseChecked(!isUppercaseChecked);
  };  

  const handleOnChangeSymbols = () => {
    if (!isNumberChecked && !isLowercaseChecked && !isUppercaseChecked) {
      return;
    }
    setIsSymbolsChecked(!isSymbolsChecked);
  };

  return (
    <div className="m-6 p-6 bg-secondaryBgColorLight dark:bg-secondaryBgColorDark rounded-md flex flex-col justify-center items-center">
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl text-violet-500 dark:text-yellow-200">
          Generador de Password
        </h1>
      </div>

      <div className="w-[70%]">
        <div className="flex items-center">
          <button
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-blue-700 dark:bg-blue-600 border hover:bg-blue-800 dark:hover:bg-blue-700 rounded-s-lg border-blue-700 dark:border-blue-600 hover:border-blue-700 dark:hover:border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={handlerGenaretor}>
            Generar
          </button>
          <div className="relative w-full">
            <input
              id="url-shortener"
              type="text"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-e-0 border-gray-300 text-gray-500 dark:text-gray-400 text-sm border-s-0 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-inputBgColorDark dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              readOnly
              disabled
            />
          </div>

          <button
            onClick={(e) => handlerCopy(e)}
            data-tooltip-target="tooltip-url-shortener"
            data-copy-to-clipboard-target="url-shortener"
            className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 bg-gray-100 border border-gray-300 rounded-e-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:hover:text-white dark:border-gray-600"
            type="button">
            <span id="default-icon">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
              </svg>
            </span>
            {copied ? (
              <span id="success-icon" className="inline-flex items-center">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
            ) : (
              ""
            )}
          </button>
        </div>

        {/* Opciones */}
        <div>
          <div className="mt-2 mb-3 flex flex-col items-start sm:items-center sm:flex-row">
            <input
              className="h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-1 dark:bg-gray-700 dark:border-gray-600"
              type="range"
              name="caracteres"
              id="caracteres"
              value={lengthCharacter}
              min={6}
              max={40}
              onChange={(e) => setLengthCharacter(parseInt(e.target.value, 10))}
            />{" "}
            <label
              htmlFor="caracteres"
              className="sm:ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              &nbsp;{`${lengthCharacter} Caracteres`}
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              name="number"
              id="number"
              checked={isNumberChecked}
              onChange={handleOnChangeNumber}
            />
            <label
              htmlFor="number"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Numeros
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              name="minusculas"
              id="minusculas"
              checked={isLowercaseChecked}
              onChange={handleOnChangeLowercase}
            />
            <label
              htmlFor="minusculas"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Minúsculas
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              name="mayusculas"
              id="mayusculas"
              checked={isUppercaseChecked}
              onChange={handleOnChangeUppercase}
            />
            <label
              htmlFor="mayusculas"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Mayúsculas
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              type="checkbox"
              name="simbolos"
              id="simbolos"
              checked={isSymbolsChecked}
              onChange={handleOnChangeSymbols}
            />
            <label
              htmlFor="simbolos"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Simbolos
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
