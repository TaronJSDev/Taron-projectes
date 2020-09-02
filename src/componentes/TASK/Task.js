import React, { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";

export default class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.fullTask.title,
      description: this.props.fullTask.description,
      date: this.props.fullTask.date,
    };
  }

  render() {
    const { title, description, date } = this.state;
    const { fullTask } = this.props;
    return (
      <Col>
        <Card className="text-center">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button
              variant="primary"
              onClick={() => this.props.onEditModal(fullTask.id)}
            >
              Edit
            </Button>
            <Button variant="primary">X</Button>
          </Card.Body>
          <Card.Footer className="text-muted">{date}</Card.Footer>
        </Card>
      </Col>
    );
  }
}
