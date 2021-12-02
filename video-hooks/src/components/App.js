import React from "react";
import SearchBar from "./SearchBar";

import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    data: [],
  };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search/", {
      params: {
        q: term,
      },
    });
    this.setState({ data: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>{this.state.data.length}</p>
      </div>
    );
  }
}

export default App;
