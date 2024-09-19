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
            <div class="below"></div>
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
        </home>
        );
    }

}
export default Home