import React, { Component } from "react";
import GirlImage from "./GirlImage";

import { Link } from 'react-router-dom'
class MainContent extends Component {
  render() {
    const allImages = this.props.images.map(img => (

      <div className = "col-3" key={img._id}>
        <Link to={`/cuonghx`} >
          <GirlImage  img={img} />
        </Link>
      </div>
    ));
    return (
      <div className="container main_content">
        <div className="row">{allImages}</div>
      </div>
    );
  }
}

export default MainContent;
