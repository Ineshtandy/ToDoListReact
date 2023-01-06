import React, { Component } from "react";

class Navbar extends Component {
  render = () => {
    return (
      <div className="col-12">
        <h2 className="bg-primary text-whitetext-center p2">
          {this.props.name}'s do list
        </h2>
        {/* <button
            className="btn btn-secondary m-2"
            onClick={this.changeStateData}
          >
            change
          </button> */}
      </div>
    );
  };
}

export default Navbar;
