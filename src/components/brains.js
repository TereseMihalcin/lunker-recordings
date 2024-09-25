import React, { Component } from "react";
import axios from "axios";

class Brains extends Component {
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
    var images = this.state.data.images.brains.map((images) =>
    <div class="contact-form">
      <div class="row justify-content-center">
        <div class="brains-title col-6">
            <h2>Human Brains</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src={images.src} alt={images.alt}></img>
        </div>
      </div>
    </div>
    );
  return (<>{images}</>);
}
}

export default Brains;