import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export default class TitleBar extends Component{
    render(){
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h4>{this.props.subTitle}</h4>
        </div>
      );
    }
  }
  
TitleBar.propTypes={
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}

TitleBar.defaultProps = {
    title:"Default Title",
    subTitle:"Created By Alpha"
}