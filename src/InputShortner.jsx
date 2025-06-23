import React from 'react'

const InputShortner = () => {
  return (
    <div className='inputContainer'>
        <h1>URL <span>Shortener</span></h1>
      <div>
        <input type='text' placeholder='Paste a link to shorter it'/>
        <button>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortner
