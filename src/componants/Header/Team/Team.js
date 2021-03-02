import React from 'react';
import {useState} from 'react';
import {playerData} from '../../../playerData';
import Cart from '../../Cart/Cart';
import Player from '../../Player/Player';

import './Team.css';



const Team =() => {
    
    const first12= playerData.slice(0,12)
    const [players, setPlayers] = useState(first12);
    const [cart, setCart] = useState([]);

    const handleAddPlayer = (player) =>{
        const newCart = [...cart, player];
        setCart (newCart);
    }
   
    return (
        <div className="team-container">
            <div className="player-container">
            
                {
                players.map(player=> <Player 
                    handleAddPlayer = {handleAddPlayer}
                    player={player}></Player>)
                }
                
            
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
    };

export default Team;