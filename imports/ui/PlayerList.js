import React, {Component} from 'react';
import Player from "./Player";
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class PlayerList extends Component{

    renderPlayers = ()=> this.props.players.length === 0 ? <div className="item"> <p className="item__message">Add Your First Player To Get Started</p> </div>: this.props.players.map((player) =>(<Player key={player._id} player={player} />));
    
    render(){
        return (
            <div>
                <FlipMove duration={500} easing="ease-out" maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
}
PlayerList.propTypes={
    players:PropTypes.array.isRequired
}