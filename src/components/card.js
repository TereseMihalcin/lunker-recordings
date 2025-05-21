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

          const styles = {
            textDecoration: 'none'
          };
            if (!this.state.data) return <p>doing my best...</p>;
            var cards = this.state.data.card_data.card_info.map((cards) =>
              <a class="card col-md-3 col-sm-12 mt-4 mx-4 px-0" style={styles} href={cards.link}>
                <div>
                  <img src={cards.image_src} class="card-img-top" alt="band preview"></img>
                  <div class="card-body">
                    <h3 class="card-title">{cards.title}</h3>
                    <p class="card-text" >{cards.desc}</p>
                  </div>
                </div>
              </a>
            );
            return (
                <>{cards}</>
            );
            
            
        }
}

export default Card;