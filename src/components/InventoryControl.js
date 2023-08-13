import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  render() {
    return <React.Fragment></React.Fragment>;
  }
}

export default InventoryControl;
