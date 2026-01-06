import React from 'react';
import './Landing.css';
import { usePageInfo } from "./../../PageContext";

function Landing() {
  const { ChangePage } = usePageInfo();
  const { setHover } = usePageInfo();
  return (
    <div className="Landing">
      <h1><span>Hi</span> fellow friend !</h1>
      <p>I'm a <span>software developer</span>,</p>
      <p>Or maybe <span>more</span> !</p>
      <button onClick={() => ChangePage(2)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>Learn about me</button>
    </div>
  );
}

export default Landing;