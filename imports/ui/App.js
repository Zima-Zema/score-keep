import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";
import { Players, calcPlayerPositions, PlayersIndex } from "../api/players";

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
            playersList:Meteor.call("getAllPlayers")
        }
    }
    updateSearch(e){
        e.preventDefault();
        this.setState({search:ReactDOM.findDOMNode(this.refs.textInput).value.trim()})
    }
    render(){
        let title = "Score Keep";
        let subTitle = "Created By Zima";
        // let playersList = PlayersIndex.search('tes').fetch();
        let playersList =Meteor.call("getAllPlayers");
        console.log("playerList")
        let positionedPlayers= calcPlayerPositions();
        return(
            <div>
                <TitleBar title={title} subTitle={subTitle}  />
                <div className="wrapper">
                    <div className="item">
                        <form className="form" onSubmit={this.updateSearch.bind(this)}>
                            <input onChange={this.updateSearch.bind(this)} className="form__input" value={this.state.search} type="text" ref="textInput" name="playerName" placeholder="Search Player Name"/>
                            <button  className="button">Search</button>
                        </form>
                    </div>
                    <PlayerList players={positionedPlayers} />
                    <AddPlayer />
                </div>
          </div>
        );
    }
}