import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import img1 from "../../assets/user-logo.jpg";
export default function Profile() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <img
            src={img1}
            alt="user img"
            style={{
              height: "101px",
              borderRadius: "54px",
              marginLeft: "19px",
            }}
          />
          <Card.Title style={{ marginLeft: "21px" }}>user name</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to="/edit-profile">edit profile</Link>
          <br />
          <Link to="/change-password">change password</Link>
        </Card.Body>
      </Card>
    </>
  );
}
