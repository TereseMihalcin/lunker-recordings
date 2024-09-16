import React, { Component } from "react";
import axios from "axios";

class Card extends Component {
    state = {
      data: null
    };

    componentDidMount() {
        axios.get('./data.json')
          .then(response => {
            this.setState({ data: response.data });
          });
      }

        render(){
            if (!this.state.data) return <p>doing my best...</p>;
            var cards = this.state.data.card_data.card_info.map((cards) =>
            <li className="list-inline-item mx-5">
                <h3 class="title">{cards.title}</h3>
                <div class="preview-image">
                    <img src={cards.image_src} alt="band preview"></img>
                </div>
                <div>
                    <p>{cards.desc}</p>
                </div>
            </li>
            );
            return (
                <ul>{cards}</ul>
            );
            
            
        }
}

export default Card;