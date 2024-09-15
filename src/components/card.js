import React, { Component } from "react";

class Card extends Component {

    render() {
        return (
            <div>
                <h3 class="title">var band name</h3>
                <div class="preview-image">
                    <img src="{var card image}" alt="band preview"></img>
                </div>
                <div>
                    <p>"var band description"</p>
                </div>
            </div>
        );
    }

}

export default Card;