import { useState } from 'react'
import * as sass from 'sass'
import './App.css'

function App() {
  const [content, setContent] = useState('')
  const [result, setResult] = useState('')

  const compile = (v) => {
    setContent(v.target.value)
    setResult(sass.compileString(v.target.value).css)
  }

  return (
    <>
      {result}

        <textarea name="" id="" value={content} onChange={(v) => {
          console.log(v)
          compile(v)
        }}></textarea>
    </>
  )
}

export default App
