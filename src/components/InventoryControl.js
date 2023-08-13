import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
    };
    this.handleClick = this.handleClick.bind(this); // Bind the method to the class
  }

  handleClick() {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  }

  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList =
      this.state.mainInventoryList.concat(newInventory);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewInventoryForm
          onNewInventoryCreation={this.handleAddingNewInventoryToList}
        />
      ); // Removed extra curly brace
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = (
        <InventoryList inventoryList={this.state.mainInventoryList} />
      );
      buttonText = "Add Inventory";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default InventoryControl;
