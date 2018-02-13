import React, {Component} from 'react';
import Player from "./Player";
import PropTypes from 'prop-types';


export default class PlayerList extends Component{

    renderPlayers = ()=>  this.props.players.map((player) =>(<Player key={player._id} player={player} />));
    
    render(){
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}