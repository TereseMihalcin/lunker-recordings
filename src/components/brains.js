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
    <div class="band-item">
        <div class='justify-content-center'>
          <a href={images.src} title={images.alt}>
            <img src={images.src} alt={images.alt}></img>
          </a>
        </div>
    </div>
    );
  return (
    
    <div class="band">
    
      <div class="row justify-content-center">
        <div class="title brains">
          <h2>Human Brains</h2>
        </div>
        <div class="row justify-content-center excerpt-desc">
          <div class="col-6">
            <img src="/images/brains/brainsExcerpt_Intro.png" alt="clipping of a description of the human brains"></img>
          </div>
        </div>
      </div>
      <div class="row justify-content-center excerpt-desc">
          <div class="col-8 flex-band">{images}</div>
          </div>
    </div>
  );
}
}

export default Brains;