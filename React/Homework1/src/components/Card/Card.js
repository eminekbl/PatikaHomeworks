import React from "react";
import "./Card.css";
import heartOutline from "../../assets/heart-outline.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.state = {
      liked: props.isLiked
    }
  }

  handleClick = () => {
    this.setState({ liked: !this.state.liked })
  }

  render() {
    const { author, item, count } = this.props
    return (
      <div className="card" >
        <div className="card-header">
          <div className="profile">
            <span className="letter">{author[0]}</span>
          </div>
          <div className="card-title-group">
            <h5 className="card-title">{item.title}</h5>
            <div className="card-date">{item.date}</div>
          </div>
        </div>
        <img className="card-image " src={item.image} alt="Logo" />
        <div className="card-text">{item.description}</div>
        <div className="card-like-bar" onClick={this.handleClick}>
          {this.state.liked ? (
            <img className="card-like-icon" src={heartFill} alt="Logo" />
          ) : (
            <img className="card-like-icon" src={heartOutline} alt="Logo" />
          )}
          <div className="like-text">
            <b>{count}</b> kişi bu tarifi beğendi.
          </div>
        </div>
      </div>
    );
  }

}
