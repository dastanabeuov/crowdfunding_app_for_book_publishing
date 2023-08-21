import React from "react";
import Subscribe from "./Subscribe";

class App extends React.Component {
  render() {
    return (
      <Subscribe book={this.props.book} />,
    );
  }
}

export default App;