import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";
import coinsound from "../../Assets/coindrop.mp3";
class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: "yazi",
      flipping: false,
      yaziCount: 0,
      turaCount: 0,
      play: true,
    };
  }
  audio = new Audio(coinsound);
  handleClick = () => {
    this.state.play ? this.audio.play() : this.audio.pause();
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    let randomNumber = Math.round(Math.random());

    if (randomNumber === 1) {
      this.setState({ side: "tura", turaCount: this.state.turaCount + 1 });
    } else {
      this.setState({ side: "yazi", yaziCount: this.state.yaziCount + 1 });
    }
  };
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {});
  };
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p style={{ backgroundColor: "lavender" }}>
          Toplam
          <strong> {this.state.turaCount + this.state.yaziCount} </strong>
          atıştan
          <span style={{ color: "darkcyan" }}>
            {" "}
            <strong> {this.state.turaCount} </strong>tura
          </span>
          <span style={{ color: "darkviolet" }}>
            <strong> {this.state.yaziCount} </strong>
            yazı{" "}
          </span>
          geldi.
        </p>
        <button
          onClick={() => {
            this.setState({ yaziCount: 0, turaCount: 0 });
          }}
        >
          Sıfırla
        </button>
        <button
          onClick={this.togglePlay}
          className={this.state.play ? "sound-on" : "sound-off"}
        >
          {this.state.play ? "Sound On" : "Sound Off"}
        </button>
      </div>
    );
  }
}

export default CoinFlipper;
