import React,{useState} from 'react';
import '../App.css';
import Nav from '../components/Nav';
import iroze from '../images/roze04.jpg'
const Home = () =>{
  return (
    <>
    <Nav/>    
    <div className="main">
      <h2>메인페이지</h2>
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/roze05.jpg`}/>
      </div>
      <br/>
      <div>
        <img src={iroze}/>
      </div>
    </div>
    </>
  );
}

export default Home;
