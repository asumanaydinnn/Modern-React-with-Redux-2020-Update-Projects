/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "semantic-ui-css/semantic.min.css";

//transformed the functional component to class based one
//this is refactoring
class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  //Lifecycle Methods
  componentDidMount() {
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

  componentDidUpdate() {
    //Render method is called again here many times
    console.log("My component was just updated - it rerendered!");
  }

  //to be more oriented and general, we create this small function
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      //   return <div>Lattitude: {this.state.lat} </div>;
      //we give the latitude as props to the SeasonDisplay
      return <SeasonDisplay lat={this.state.lat} />;
    }

    //if message is not defined
    //default prop is passed
    return <Spinner message="Please accept location request" />;
  }

  //we have to define render
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
