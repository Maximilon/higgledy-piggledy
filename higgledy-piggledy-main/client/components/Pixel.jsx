import React, { useState, useEffect } from 'react'

const Pixel = (props) => {
  const randomHexColor = () =>
    `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, 0)}`

  const styles = {
    backgroundColor: randomHexColor(),
    width: '40px',
    height: '40px',
  }

  const [style, setStyle] = useState(styles)

  // kinda scary but it works!
  useEffect(() => {
    // const returnedTarget = Object.assign(styleObj, props.newValue)
    const interval = setInterval(() => {
      const styleObj = {
        backgroundColor: randomHexColor(),
        width: '40px',
        height: '40px',
      }
      setStyle({
        ...styleObj,
        ...props.newValue,
        borderBottomColor: randomHexColor(),
      })
      // { ...returnedTarget, backgroundColor: randomHexColor() }
    }, 1000)
    return () => clearInterval(interval)
  }, [props.newValue])

  return <div class="pixel" style={style}></div>
}

export default Pixel
