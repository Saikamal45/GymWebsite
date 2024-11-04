import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Services.module.css";
import Gym1 from "../images/Gym.jpg";
import Gym2 from "../images/Gym2.jpg";
import Recovery from "../images/Recovery.jpg";
import Pt from "../images/PT.jpg";
export const Services = () => {
  return (
    <>
      <h1 className={styles.head1}>Traing Services</h1>
      <div className={styles.cardContainer}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={Gym1}
            alt="Not Found"
            className={styles.cardImage}
          />
          <Card.Body>
            <Card.Title>Weight Lifting</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={Gym2}
            alt="Not Found"
            className={styles.cardImage}
          />
          <Card.Body>
            <Card.Title>Cardio</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={Recovery}
            alt="Not Found"
            className={styles.cardImage}
          />
          <Card.Body>
            <Card.Title>Recovery Services</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={Pt}
            alt="Not Found"
            className={styles.cardImage}
          />
          <Card.Body>
            <Card.Title>Personal Training</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <h1 className={styles.head2}>Choose Your Pricing Plan</h1>
      <div className={styles.plans}>
        <Card style={{ width: "18rem" }}>
          <h4>Basic Plan</h4>
          <Card.Body className={styles.cardbody}>
            <Card.Text>
              <p>Access to gym equipment</p>
              <p>Group fitness classes (limited to 3 classes per month)</p>
              <p>Free fitness assessment on joining</p>
              <p>1 guest pass per month</p>
            </Card.Text>
          </Card.Body>
          <h4>$100</h4>
        </Card>

        <Card style={{ width: "18rem" }}>
          <h4>premium Plan</h4>
          <Card.Body className={styles.cardbody}>
            <Card.Text>
              <p>All benefits of the Basic Membership</p>
              <p>Unlimited access to group fitness classes</p>
              <p>One personal training session per month</p>
              <p>Access to specialized workshops</p>
              <p>2 guest pass per month</p>
            </Card.Text>
          </Card.Body>
          <h4>$200</h4>
        </Card>

        <Card style={{ width: "18rem" }}>
          <h4>Platinum Plan</h4>
          <Card.Body className={styles.cardbody}>
            <Card.Text>
              <p>All benefits of the Standard Membership</p>
              <p>Unlimited personal training sessions</p>
              <p>Priority booking for classes and workshops</p>
              <p>Access to exclusive members-only events</p>
              <p>Free monthly nutrition consultation</p>
            </Card.Text>
          </Card.Body>
          <h4>$300</h4>
        </Card>
      </div>
    </>
  );
};
