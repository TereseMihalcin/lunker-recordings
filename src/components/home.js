import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'


class Home extends Component {

    render() {

        return(
        <home className="App-home">
            <div class="container">
                <div class="row">
                    <div class="col-6 col-sm-3"></div>
                    <div class="col-6 col-sm-3"></div>
                    <div class="col-6 col-sm-3"></div>
                    <div class="col-6 col-sm-3"></div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h1>
                            <FontAwesomeIcon icon={faCompactDisc} />
                            Lunker Recordings
                        </h1>
                    </div>
                </div>
            </div>
            
            
        </home>
        );
    }

}
export default Home