import React from 'react'
import "./Error.css"

export default function Error(props) {
  return (
            <div className='backdrop'>
      <div className='modal'>

        <header>
            <h2>{props.title}</h2>
        </header>
        <div>
            <p>{props.message}</p>
        </div>
        <footer>
            <button onClick={props.click}>okay</button>
        </footer>
        </div>
    </div>
  )
}
