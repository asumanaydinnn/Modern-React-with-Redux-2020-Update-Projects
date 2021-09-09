import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { images: [] };
  }

  async onFormSubmit(term) {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageList imageList={this.state.images} />
      </div>
    );
  }
}

export default App;
