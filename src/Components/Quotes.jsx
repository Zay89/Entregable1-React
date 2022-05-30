import React from 'react'
import Button from './Button'

const Quotes = ({quotesRandom, colorsRandom, clickButton}) => {

  const styleButton = {
    backgroundColor: colorsRandom
  }


  return (
    <div className='general'>
      <div style={{color: colorsRandom}} className="card">
        <div className="quote">
          <p className='phrase'>
            {quotesRandom.quote}
          </p>
        </div>
        <div>
            <p className="author">
              {quotesRandom.author}
            </p>
        </div>
        <Button
          styleButton={styleButton}
          clickButton={clickButton}
        />
      </div>
    </div>
  )
}

export default Quotes