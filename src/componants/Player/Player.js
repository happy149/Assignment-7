import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faBowlingBall} from '@fortawesome/free-solid-svg-icons';

import './Player.css';

const Player = (props) => {

    const {image,information,age,salary,name,batting,bowling} = props.player;
    
    return (
        <div className="player">
            <div>
                <img src={image} alt=""/>

            </div>
            <div>
                <h1>NAME:{name}</h1>

            <h4 className="player-name">INFORMATION:{information}</h4>
        
            <h3>AGE:{age}</h3>
            <h3>Batting:{batting}</h3>
            <h3>bowling:{bowling}</h3>
            <h4>SALARY:{salary}</h4>
            <button className="button"
            onClick={() =>props.handleAddPlayer(props.player)}
            >
                <FontAwesomeIcon icon={faCoffee, faBowlingBall} /> Hire for club</button>
            

            
            </div>
        </div>
    );
};

export default Player;