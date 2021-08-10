import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  /*
NOTE: 

=> No need to define contructor anymore
=> We do define  state = { lat: null, errorMessage: "" }; as a  class field instead. And it works exactly same as we do with this contructor. Bable will build up contructor for you anyways and initialize your state in there.
=> Becoz we It's React app, we run app through Bable. When the code is executed, Bable will translate and write this constructor code for us.

   constructor(props) {
     super(props);
     this.state = { lat: null, errorMessage: "" };
   }

*/

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      /*
      NOTE: When we call setState(), it is an additive or an addition operation. It means that if we set our state with just a "lat" property, it would not overwrite the errorMessage prop, the errorMessage will not get overwritten by the value of "lat". And we can choose to set only properties that we want, don't have to set all the properties in state object.
      */
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("My component was just updated - it rerendered ");
  }

  /**
   * => This is a helper function
   * => A good example, we have to try to avoid multiple return statements inside a render method.
   */
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
