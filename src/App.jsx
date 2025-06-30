import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("bdt")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"

    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            setAmount={setAmount}
                        />
                      </div>


                      <button
                            type='button'
                            className='bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                                         mx-auto block text-white font-semibold rounded-xl
                                         py-1 px-3 transation duration-300 transform hover:scale-105
                                         shadow-md ease-in-out absolute left-1/2 -translate-x-1/2
                                         -translate-y-1/2'
                            onClick={swap}
                            >
                            swap
                      </button>


                      <div className='w-full mb-1'>
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                          />
                      </div>

                    <button
                        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white 
                                    font-semibold py-2 px-6 rounded-xl shadow-md 
                                    transition duration-300 ease-in-out transform hover:scale-105 
                                    mx-auto block"
                            >
                            Convert {from} to {to}
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
);
}

export default App