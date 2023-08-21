import React from "react";

class Subscribe extends React.Component {
  render() {
    const { Name, Description, Pages, Lang, progress, Cover } = this.props;
    
    return(
      <div>
        <h1>Subscribe - {Name}!</h1>
        <p>{Description}</p>
        <p>{Pages}</p>
        <p>{Lang}</p>
        <p>{progress}</p>
        <img src="{Cover}"/>
      </div>
    );
  }
}

export default Subscribe;