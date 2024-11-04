import React from "react";
import Gym from "../images/Gym1.jpg";
import styles from './Home.module.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


export const Home = () => {
  const navigate =useNavigate();
  
  const handleExplore=()=>{
   navigate("/about");
  };

  return (
    <div className={styles.imageContainer}>
         <div className={styles.textContent}>
        <h1 className="display-3 text-uppercase mb-3 text-white">The Best Fitness <br/>Studio in Town</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deserunt.<br/> Totam officiis obcaecati veritatis suscipit vero, eveniet labore ut aperiam
        <br/> molestias repudiandae odio illum praesentium odit. </p>
        <Button variant="light" onClick={handleExplore} >Exlpore More</Button>
        </div>
         <img src={Gym} alt="Not Found" />
    </div>
  );
};
