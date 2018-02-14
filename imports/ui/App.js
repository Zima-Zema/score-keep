import React, {Component} from 'react';
import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";
import { Players } from "../api/players";

export default class App extends Component{
    render(){
        let title = "Score Keep";
        let subTitle = "Created By Zima";
        let playersList = Players.find({},{sort:{score:-1}}).fetch();
        return(
            <div>
                <TitleBar title={title} subTitle={subTitle}  />
                <div className="wrapper">
                    <PlayerList players={playersList} />
                    <AddPlayer />
                </div>
          </div>
        );
    }
}