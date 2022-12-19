import { useCallback, useRef, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import PersonProvider from "./context/PersonProvider"
import Header from "./components/Header"

function App() {
  const [weight, setWeight] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)

  const handleSetWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(+e.target.value)
  }

  const handleCalculateBMI = () => {
    const result = weight / ((height / 100) ^ 2)
    console.log("🍉 RESULT :", result)
  }

  const handleCalculateBMIWithUseCallBack = useCallback(
    (w: number, h: number) => {
      const result = w / ((h / 100) ^ 2)
      console.log("🍕 RESULT :", result)
    },
    []
  )

  const formEle = useRef<HTMLFormElement>(null)

  return (
    <PersonProvider>
      <form
        ref={formEle}
        onSubmit={(e) => {
          e.preventDefault()
          handleCalculateBMI()
        }}
        style={{}}
      >
        <input
          type="number"
          value={weight}
          onChange={(e) => {
            handleSetWeight(e)
          }}
        />
        <input
          type="number"
          value={height}
          onChange={(e) => {
            setHeight(+e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </PersonProvider>
  )
}

export default App
