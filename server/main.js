import {Meteor} from 'meteor/meteor';
import {Players} from "../imports/api/players";

Meteor.startup(() => {
    // Players.insert({
    //     name: 'Zima',
    //     score: 3
    // }, (err, res) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(res);
    //         console.log(Players.find({}).fetch());

    //     }
    // });
});
