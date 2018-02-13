import React, {Component} from 'react';
import {Players} from "../api/players";
import PropTypes from 'prop-types';

export default class Player extends Component{
    render(){
        return (
            <p>{this.props.player.name} has {this.props.player.score} point(s)
                <button onClick={()=>Players.update({_id:this.props.player._id},{$inc: { score: 1 }})}>+1</button>
                <button onClick={()=>Players.update({_id:this.props.player._id},{$inc: { score: -1 }})}>-1</button>      
                <button onClick={()=>Players.remove({_id:this.props.player._id})}>X</button>
            </p> 
        );
    }
}

Player.propTypes={
    player:PropTypes.shape({
        _id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        score:PropTypes.number
    }).isRequired
}