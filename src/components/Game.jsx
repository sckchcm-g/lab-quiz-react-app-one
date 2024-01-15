import React from 'react'

function Game() {
  return (
    <div>
      <div className="question">{Question}</div>
      <div className="qno">{Qno}</div>
      <div className="questiondetail">{Questiondetail}</div>
      <div className="answers">
        <button>Opt1</button>
        <button>Opt2</button>
        <button>Opt3</button>
        <button>Opt4</button>
      </div>
      <div className="navigationbtn">
        <button>Prev</button> 
        <button>Next</button>
        <button>Quit</button>
      </div>
    </div>
  )
}

export default Game
