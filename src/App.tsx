import { useState } from 'react';
import * as sass from 'sass';
import './App.scss';
import { Content } from './components/content';

function App() {
  const [content, setContent] = useState('');
  const [result, setResult] = useState('');

  const compile = (v) => {
    setContent(v.target.value);
    setResult(sass.compileString(v.target.value).css);
  };

  return (
    <>
      <header className="nav">
        <span className="title">Content Style</span>
        <span>
          <select name="language">
            <option value="zh-cn">中文</option>
            <option value="en">EN</option>
          </select>
        </span>
      </header>
      <section className="main">
        <section className="article">
          <Content></Content>
        </section>
        <section className="monaco-editor">
          <div className="line"></div>
        </section>
      </section>
      {result}

      {/* <textarea name="" id="" value={content} onChange={(v) => {
          console.log(v)
          compile(v)
        }}></textarea> */}
    </>
  );
}

export default App;
