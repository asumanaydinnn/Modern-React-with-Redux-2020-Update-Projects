import React, { Component } from "react";

class ImageList extends Component {
  render() {
    return <div>Found: {this.props.imageList.length} images</div>;
  }
}

export default ImageList;
