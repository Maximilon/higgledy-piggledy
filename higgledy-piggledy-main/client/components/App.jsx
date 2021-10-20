import React, { useState } from 'react'
import Pixel from './Pixel'

const App = () => {
  const randomHexColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`
  }

  //useStates
  const [newValue, setValue] = useState(null)

  const makeSquare = () => {
    const squareObj = { borderRadius: '0px' }
    setValue(squareObj)
  }

  // const makeFaster = () => {
  //   const fasterObj = { borderRadius: '0px' }
  //   setValue(fasterObj)
  // }

  // const makeSlower = () => {
  //   const slowerObj = setValue(slowerObj)
  // }

  const makeCircle = () => {
    const circleObj = { borderRadius: '360px' }
    setValue(circleObj)
  }

  // const makePiggledy = () => {
  //   const piggledyObj = { borderRadius: '360px' }
  //   setValue(piggledyObj)
  // }

  const makeTriangle = () => {
    const triangleObj = {
      width: '0px',
      height: '0px',
      borderLeft: '50px solid transparent',
      borderRight: '50px solid transparent',
      borderBottom: `100px solid ${randomHexColor()}`,
    }
    setValue(triangleObj)
  }

  const makeRectangle = () => {
    const rectangleObj = {
      width: '100px',
      height: '50px',
      borderBottom: `100px solid ${randomHexColor()}`,
    }
    setValue(rectangleObj)
  }

  const makeEgg = () => {
    const eggObj = {
      display: 'block',
      width: '63px',
      height: '90px',
      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    }
    setValue(eggObj)
  }

  const makeParallelogram = () => {
    const ParallelogramObj = {
      width: '90px',
      height: '60px',
      transform: 'skew(20deg)',
    }
    setValue(ParallelogramObj)
  }

  const makeTrapezoid = () => {
    const trapezoidObj = {
      width: '50px',
      height: '0px',
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      borderBottom: `100px solid ${randomHexColor()}`,
    }
    setValue(trapezoidObj)
  }

  const makeMargin = () => {
    const marginObj = { margin: '10px' }
    // border-style: solid, dotted, dashed
    // border-size: 1-1000px
    // border-color: white, black, #44444
    // border: solid 1px white; (short hand)
    setValue(marginObj)
  }

  const makeHiggledy = () => {
    const higgledyObj = {
      width: '50px',
      height: '0px',
      borderLeft: '25px solid transparent',
      borderRight: '25px solid transparent',
      borderBottom: `100px solid ${randomHexColor()}`,
      transform: 'skew(20deg)',
      borderRight: '50px solid transparent',
      transform: 'rotate(20deg)',
      transform: 'rotateZ(43deg)',
      margin: '6px 3px 9px 0px',
    }
    setValue(higgledyObj)
  }

  return (
    <div class="app">
      <h1 class="title">Higgledy-Piggledy</h1>
      <div class="buttons">
        <button onClick={makeSquare}>Square</button>
        <button onClick={makeCircle}>Circle</button>
        <button onClick={makeTriangle}>Triangle</button>
        <button onClick={makeTrapezoid}>Trapezoid</button>
        <button onClick={makeParallelogram}>Parallelogram</button>
        <button onClick={makeEgg}>Egg</button>
        <button onClick={makeHiggledy}>higgledy</button>
        <button onClick={makeRectangle}>Rectangle</button>
        {/* <button onClick={makePiggledy}>Piggledy</button> */}
        <button onClick={makeMargin}>Margin</button>
        {/* <button onClick={makeFaster}>Faster</button>
        <button onClick={makeSlower}>Slower</button> */}
      </div>
      {/* <button onClick={makeTriangle}>circle</button> */}
      {/* <div class="settings__open">&#9881;</div> */}
      <div class="pixel-box">
        {Array.from({ length: 400 }, (v, i) => (
          <Pixel newValue={newValue} />
        ))}
      </div>
    </div>
  )
}

export default App
