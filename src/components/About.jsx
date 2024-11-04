import React from "react";
import bg from "../images/GymBg.jpg";
import styles from "./About.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Gym from "../images/Gym12.jpg";
import Gym1 from "../images/Gym.jpg";
import Lt from "../images/Trainer1.jpg";
import Lt1 from "../images/Trainer2.jpg";
import Card from 'react-bootstrap/Card';

export const About = () => {
  return (
    <>
    <div className={styles.outerContainer}>
      <h1 className="display-3  mb-3 text-white">Empowering all to thrive <br/>and live fully.</h1>
      <ul>
        <li><FontAwesomeIcon icon={faCheck} className={styles.icons}/>Functional Training</li>
        <li><FontAwesomeIcon icon={faCheck} className={styles.icons}/>Group Cycling</li>
        <li><FontAwesomeIcon icon={faCheck} className={styles.icons}/>Personal Training</li>
        <li><FontAwesomeIcon icon={faCheck} className={styles.icons}/>Resistance Area</li>
        <li><FontAwesomeIcon icon={faCheck} className={styles.icons}/>Cardio Training</li>
      </ul>
      </div>
       <div className={styles.innerContainer}>
       <img src={bg} alt="NotFound" className={styles.backgroundImage}/>
    </div>

    <div className={styles.textContainer}>
      <div className={styles.left}>
       <p>What We Do</p>
       <h1 className="display-3  mb-3 ">The transformative power of <br/>fitness inspired our founder to <br/>take control of his own life</h1>
      </div>
      <div className={styles.right}>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Corrupti molestiae voluptate necessitatibus voluptates fugit harum veniam at esse perferendis, 
         <br/>nobis, officia labore nostrum facilis quod minus tempore ex excepturi blanditiis?</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Corrupti molestiae voluptate necessitatibus voluptates fugit harum veniam at esse perferendis, 
         <br/>nobis, officia labore nostrum facilis quod minus tempore ex excepturi blanditiis?</p>
      </div>
    </div>

    <div className={styles.personal}>
      <p>Personal Training</p>
      <h1 className="display-3  mb-3 ">Our Personal Trainers</h1>
      <Container>
      <Row>
        <Col xs={6} md={3}>
          <Image src={Gym} thumbnail className={styles.trainerImage}/>
          <h2>John</h2>
          <p>Body Building Coach</p>
        </Col>
        <Col xs={6} md={3}>
          <Image src={Gym1} thumbnail className={styles.trainerImage} />
          <h2>David</h2>
          <p>Professional fitness coach</p>
        </Col>
        <Col xs={6} md={3}>
          <Image src={Lt} thumbnail className={styles.trainerImage}/>
          <h2>Angela</h2>
          <p>Cardio</p>
        </Col>
        <Col xs={6} md={3}>
          <Image src={Lt1} thumbnail className={styles.trainerImage}/>
          <h2>Elena</h2>
          <p>Exercise Physiologist</p>
        </Col>
      </Row>
    </Container>
    </div>

    <div className={styles.testimonals}>
      <h1 className="display-3 text-uppercase mb-4">Testimonals</h1>
      <div className={styles.cardsContainer}>
    <Card style={{ width: '18rem' }} className={styles.cards}>
      <Card.Body>
        <Card.Text>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt odio consectetur quo saepe quisquam aliquam facere tempore numquam accusamus, enim doloribus, reiciendis, qui nulla ipsam cumque possimus. Aspernatur, dolorum cum?
        </Card.Text>
        <Card.Title className={styles.titles}>Madhuri</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className={styles.cards}>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint nisi molestias ad nostrum, vitae sunt cum consequatur necessitatibus, laboriosam aperiam, assumenda excepturi non magni est? Iste aspernatur ipsum rerum?
        </Card.Text>
        <Card.Title className={styles.titles}>Prabhas</Card.Title>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className={styles.cards}>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, a sunt sapiente recusandae delectus quia. Maiores ipsum, expedita eum delectus cum quidem explicabo reprehenderit recusandae, magni inventore sed. Adipisci, laudantium!
        </Card.Text>
        <Card.Title className={styles.titles}>Venky</Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    </>
  );
};
