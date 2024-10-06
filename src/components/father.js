import React, { Component } from "react";
import axios from "axios";

class Father extends Component {

    state = {
        data: null
      };
  
      componentDidMount() {
          axios.get('./data.json')
            .then(response => {
              this.setState({ data: response.data });
            });
        }

render() {
    if (!this.state.data) return <p>doing my best...</p>;
    var images = this.state.data.images.father.map((images) =>
    <div class="band-item">
        <div class='justify-content-center'>
          <a class="chocolat-image" href={images.src} title={images.alt}>
            <img src={images.src} alt={images.alt}></img>
          </a>
        </div>
    </div>
    );
  return (
    <div class="band">
      <div class="justify-content-center">
        <div class="title father">
            <h2>Father</h2>
        </div>
      </div>
      <div class="flex-band">{images}</div>
    </div>
  );
}
}

export default Father;