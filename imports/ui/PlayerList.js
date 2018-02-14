import React, {Component} from 'react';
import Player from "./Player";
import PropTypes from 'prop-types';


export default class PlayerList extends Component{

    renderPlayers = ()=> this.props.players.length === 0 ? <div className="item"> <p className="item__message">Add Your First Player To Get Started</p> </div>: this.props.players.map((player) =>(<Player key={player._id} player={player} />));
    
    render(){
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
}
PlayerList.propTypes={
    players:PropTypes.array.isRequired
}