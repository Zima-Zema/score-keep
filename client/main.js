import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import {Players} from "../imports/api/players";
import TitleBar from "../imports/ui/TitleBar";
import AddPlayer from "../imports/ui/AddPlayer";
import PlayerList from "../imports/ui/PlayerList";

import {Tracker} from "meteor/tracker";


Meteor.startup(() => {
  let playersList;
  Tracker.autorun(() => {
    playersList = Players.find({}).fetch();
    let title = "Score Keep App";
    let subTitle = "Created By Ziam";
    let jsx = (
      <div>
        <TitleBar title={title} subTitle={subTitle} />
        <PlayerList players={playersList} />
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
