import React from "react";
import './intro.css';
import bg from '../assets/image1.png'
import btnImg from '../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">こんにちは</span>
        <span className="introText">I'm<span className="introName">Sankalp</span><br />Front-end Developer.</span>
        <p className="introPara">I can write code.</p>
        <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default Intro;
