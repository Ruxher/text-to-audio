import { useEffect, useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState<string>()

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const falar = () => {
    const fala = new SpeechSynthesisUtterance(inputValue);
    fala.lang = "pt-BR";
    fala.pitch = 0.1;
    fala.rate = 1.5;
    fala.volume = 1;

    const voz = speechSynthesis.getVoices().find((v) => v.lang === "pt-BR")
    if (voz) fala.voice = voz
    speechSynthesis.speak(fala)
  }

  const parar = () => {
    speechSynthesis.cancel()
  }

  return (
    <>
      <input value={inputValue} onChange={handleInput} />
      <button className="falar" onClick={falar} >falar</button>
      <button className="parar" onClick={parar} >parar</button>
    </>
  )
}

export default App
