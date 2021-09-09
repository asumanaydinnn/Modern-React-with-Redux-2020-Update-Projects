import React, { Component } from "react";
import "./ImageList.css";

class ImageList extends Component {
  render() {
    return (
      <div className="ui segment">
        {this.props.imageList.map((image) => {
          return (
            <div className="image-list" key={image.id}>
              <img alt={image.description} src={image.urls.regular} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ImageList;
