import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

  function Cards(){
      return (


<CardGroup>
  <Card>
    <Card.Img variant="top" src= "images/roxie.JPG"/>
    <Card.Body>
      <Card.Title>Roxie</Card.Title>
      <Card.Text>
      I'm an older lady looking to link with other calm and small friends.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  
  
  
  </Card>
  <Card>
    <Card.Img variant="top" src= "images/bruno.jpg"/>
    <Card.Body>
      <Card.Title>Bruno</Card.Title>
      <Card.Text>
      I'm very shy and loving. I pairs best with calm dogs.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src= "images/keala.JPG"/>
    <Card.Body>
      <Card.Title>Keala</Card.Title>
      <Card.Text>
      I am a firecracker of anxiety and energy! I plays best with tiny dogs who love to bark.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

      );
      }

      export default Cards;