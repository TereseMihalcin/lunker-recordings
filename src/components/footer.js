import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


class Footer extends Component {

    render() {
        return (
            <div class="row justify-content-md-left foot-element p-5">
                <div class="col-sm-8">
                    <p>
                        <h3 class="foot-section">Contact</h3>
                        <p>If you're actually reading this way down here, you can reach out to me about either band things ot website things <FontAwesomeIcon icon={faArrowRight} /> <a href="mailto:dev@teresemihalcin.com">dev@teresemihalcin.com</a></p>
                    </p>
                    <p>
                        <h4 class="foot-section">Attribution</h4>
                        <p>Free SVG Backgrounds and Patterns by <FontAwesomeIcon icon={faArrowRight} /> <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">SVGBackgrounds.com</a></p>    
                    </p>
                </div>
                <div class="col-sm-4">
                    <img src="/images/lunker.png" alt="lunker logo" class="foot-logo float-end"></img>
                </div>  
            </div>

        )
    }
}

export default Footer;