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
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-10">
                        <Card />
                    </div>
                </div>
            </div>
            
            
        </home>
        );
    }

}
export default Home