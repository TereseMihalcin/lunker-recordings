import React, { Component } from "react";
import Card from './card';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {

    render() {

        return(
        <home className="App-home">
            <div class="background-image">
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-12">
                            <div class="welcome">
                                <h1 class="sixtyfour-title">Welcome to Lunker Recordings</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none' width='100%' height='120' fill='#5477a9' ><g transform='scale(1,-1)' transform-origin='50%' ><path d='M0 0v4l250 64 125-32 250 64 375-96V0H0z' ></path></g ></svg>
            <div class="cards-title container">
                <div class="row justify-content-md-center">
                    <h3>Check out some of our Artists</h3>
                </div>
            </div>
                <div class="cards container">
                    <div class="row align-items-start justify-content-center mx-3">
                        <Card />
                    </div>  
                </div>
            <div class='container'>
                <div class=" row justify-content-md-center">
                    <div class="col-sm-6 attribution-to-matt">
                    <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a>    
                    </div>
                </div>
            </div>
        </home>
        );
    }

}
export default Home