import React from 'react';
import {useState} from 'react';
import {playerData} from '../../../playerData';
import Cart from '../../Cart/Cart';
import Player from '../../Player/Player';
import Row from 'react-bootstrap/Row';
import './Team.css';



const Team =() => {
    
    const first12= playerData.slice(0,12)
    const [players, setPlayers] = useState(first12);
    const [cart, setCart] = useState([]);

    const [addedplayers, setAddedPlayers] = useState([]);

    const handleAddPlayer = (player) =>{

        var exists = addedplayers.some(item => player.name === item);
        console.log(exists);
        if(exists===false){
            const newCart = [...cart, player];
            setCart (newCart);
            addedplayers.push(player.name);
        }
       
    }
   
    return (
        <div>
        <div className="team-container">
            <Row>
            
                {
                players.map(player=> <Player 
                    handleAddPlayer = {handleAddPlayer}
                    player={player}></Player>)
                }
                
            
                </Row>
        </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            </div>
        
    );
    };

export default Team;