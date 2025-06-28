import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("bdt")
  const [convertedAmounnt, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmounnt)
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
        style={{backgroundImage: "url('image/currency.jpg')"}}  
      >
        <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30'>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className='w-full mb-1'>
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
