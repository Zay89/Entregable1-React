import { useState } from 'react'
import './App.css'
import Quotes from './Components/Quotes'
import quotes from'./Json/quotes.json'

const arrColors = [
  '#713195', '#351189', '#A35149', '#B342C0', '#AD5E2C', '#6D534D', '#FFDD67', '#816BE4',
  '#9EA026', '#3DADF9', '#6C307C', '#D25342', '#281906', '#F9185C', '#2BF7EB', '#9C2BC8',
  '#C2CF9E', '#AE92A9', '#07A61A', '#55AFA1', '#78F4F5', '#4A1E68', '#A64DB8', '#3E131A',
  '#E34AC8'
]

function App() {

  const createNumberRandom = array => {
    return Math.floor(Math.random() * array.length)
  }

  const createElementRandom = array => {
    const i = createNumberRandom(array)
    return array[i]
  }

  const [quotesRandom, setQuotesRandom] = useState(createElementRandom(quotes))
  const [colorsRandom, setColorsRandom] = useState(createElementRandom(arrColors))

  const clickButton = () => {
    setQuotesRandom(createElementRandom(quotes))
    setColorsRandom(createElementRandom(arrColors))
  }



  const appStyle = {
    backgroundColor: colorsRandom
  }


  return (
    <div style={appStyle} className="App">
      <Quotes
        quotesRandom={quotesRandom} 
        colorsRandom={colorsRandom}
        clickButton={clickButton}
      />
    </div>
  )
}

export default App
