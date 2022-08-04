import React from "react"

function App() {
  const [temp, setTemp] = React.useState(0)
  const [color, setColor] = React.useState("cold")

  function increaseTemp() {
    setTemp(temp + 1)
    changeBackgroundColor()
  }

  function decreaseTemp() {
    setTemp(temp - 1)
    changeBackgroundColor()
  }

  function changeBackgroundColor() {
    if (temp < 10) {
      setColor("cold")
    } else if (temp < 20) {
      setColor("cool")
    } else if (temp < 30) {
      setColor("warm")
    } else {
      setColor("hot pointer-event-none")
      alert("It's getting too hot 🥵🥵🥵")
    }
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temp}°C</div>
      </div>
      <div className="button-container">
        <button className="btn-plus " onClick={increaseTemp}>
          +
        </button>
        <button className="btn-minus" onClick={decreaseTemp}>
          -
        </button>
      </div>
    </div>
  )
}

export default App
