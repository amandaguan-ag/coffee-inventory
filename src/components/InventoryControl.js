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
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm />;
    } else {
      currentlyVisibleState = <InventoryList />;
    }
    return <React.Fragment>{currentlyVisibleState}</React.Fragment>;
  }
}

export default InventoryControl;
