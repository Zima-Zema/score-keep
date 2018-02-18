import React from "react";
import ReactDOM from "react-dom";
import {Meteor} from "meteor/meteor";
import App from "../imports/ui/App";
import {Tracker} from "meteor/tracker";


Meteor.startup(() => {
  Tracker.autorun(() => {
    
    ReactDOM.render(<App />, document.getElementById('app'));
  });
});
