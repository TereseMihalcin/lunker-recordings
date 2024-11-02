import React, { Component } from "react";


class Footer extends Component {

    render() {
        return (
            <div class="row justify-content-md-left foot-element p-5">
                <div class="col-sm-6">
                    <h3 class="foot-section">Attribution</h3>
                    <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a>    
                </div>
                <div class="col-sm-6">
                    <img src="/images/lunker.png" alt="lunker logo" class="foot-logo float-end"></img>
                </div>  
            </div>

        )
    }
}

export default Footer;