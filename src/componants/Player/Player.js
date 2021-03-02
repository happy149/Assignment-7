import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBowlingBall} from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Player.css';

const Player = (props) => {

    const {image,information,age,salary,name,batting,bowling} = props.player;
    
    return (


<Col>
<Card>
  <Card.Img style={{ width: '300px' }} variant="top" src={image}/>
  <Card.Body>
    <Card.Title>NAME:{name}</Card.Title>
    <Card.Text>
    <p>
    INFORMATION:{information}
    </p>
    <p>AGE:{age}</p>
            <p>Batting:{batting}</p>
            <p>bowling:{bowling}</p>
            <p>SALARY:{salary}</p>
    </Card.Text>
    <Button variant="success"
            onClick={() =>props.handleAddPlayer(props.player)}
            >
                <FontAwesomeIcon icon={faCoffee, faBowlingBall} /> Hire for club</Button>
            
  </Card.Body>
</Card>
</Col>
            
    );
};

export default Player;