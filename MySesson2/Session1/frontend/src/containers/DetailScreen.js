import React, { Component } from 'react';
import axios from '../axios';

class DetailScreen extends Component {
    state = {

    }
    componentDidMount(){
        axios.get("")
        .then(data => {
            image: data.data
        })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DetailScreen;