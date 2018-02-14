import React, {Component} from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

export default class TitleBar extends Component{
  renderSubTitle = ()=> this.props.subTitle ? <h2 className="title-bar__sub-title">{this.props.subTitle}</h2> : null;
  render(){
      return (
        <div className="title-bar">
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubTitle()}
          </div>
        </div>
      );
    }
  }
  
TitleBar.propTypes={
    title:PropTypes.string.isRequired,
    subTitle:PropTypes.string
}

// TitleBar.defaultProps = {
//     title:"Default Title",
//     subTitle:"Created By Alpha"
// }