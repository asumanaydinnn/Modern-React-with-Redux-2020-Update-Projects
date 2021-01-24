/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";

//transformed the functional component to class based one
//this is refactoring
class App extends React.Component {
  //js
  constructor(props) {
    //we need to call super every time we define constructor
    super(props);
    //this is the only time we do direct assignment to this.state
    this.state = { lat: null, errorMessage: "" };

    //this callback will not run till the we successfully initiliazed the pos.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //we have to define render
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lattitude: {this.state.lat} </div>;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
