import {Meteor} from 'meteor/meteor';
import {Players} from "../imports/api/players";

function searchPlayersName(playerName) {
    return Players.find({name : {$regex : ".*"+playerName+".*",'$options' : 'i'}},{sort:{score:-1}}).fetch();
}
function getAllPlayers() {
    let thePlayers = Players.find({},{sort:{score:-1}}).fetch();
    console.log(thePlayers);
    return  thePlayers;
}
Meteor.startup(() => {
    Meteor.methods({
        "searchPlayersName": searchPlayersName,
        "getAllPlayers":getAllPlayers
      });
});
