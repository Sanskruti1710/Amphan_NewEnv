import React from 'react';
import { Card } from 'react-bootstrap';

const CardView = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Card style={{ width: '25rem', height: '13rem', marginLeft: '4em', boxShadow: '5px 5px 5px -5px #888' }}>
          <Card.Body>
            <Card.Title>Name: Environment one</Card.Title>
            <br />
            <Card.Subtitle className="mb-2 text-muted">Modified:35</Card.Subtitle>
            <Card.Text>Owner: 21</Card.Text>
            <Card.Text>Activity : Australia</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem', height: '13rem', marginLeft: '4em', boxShadow: '5px 5px 5px -5px #888' }}>
          <Card.Body>
            <Card.Title>Name: Environment two</Card.Title>
            <br />
            <Card.Subtitle className="mb-2 text-muted">Modified:42</Card.Subtitle>
            <Card.Text>Owner: 22</Card.Text>
            <Card.Text>Activity: England</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '25rem', height: '13rem', marginLeft: '4em', boxShadow: '5px 5px 5px -5px #888' }}>
          <Card.Body>
            <Card.Title>Name: Environment three</Card.Title>
            <br />
            <Card.Subtitle className="mb-2 text-muted">Modified:32</Card.Subtitle>
            <Card.Text>Owner: 23</Card.Text>
            <Card.Text>Activity : India</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CardView;
