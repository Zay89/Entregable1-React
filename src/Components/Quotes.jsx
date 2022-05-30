import React from 'react'

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
        <button style={styleButton} className='button' onClick={clickButton}>&#62;</button>
      </div>
    </div>
  )
}

export default Quotes