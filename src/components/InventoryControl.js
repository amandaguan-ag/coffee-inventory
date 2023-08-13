import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import InventoryDetail from "./InventoryDetail";
import EditInventoryForm from "./EditInventoryForm";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      editing: false, // new code
    };
    this.handleClick = this.handleClick.bind(this); // Bind the method to the class
  }

  handleClick = () => {
    if (this.state.selectedInventory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false, // new code
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(
      (inventory) => inventory.id !== id
    );
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null,
    });
  };

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({ editing: true });
  };

  handleEditingInventoryInList = (inventoryToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter((inventory) => inventory.id !== this.state.selectedInventory.id)
      .concat(inventoryToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedInventory: null,
    });
  };

  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList =
      this.state.mainInventoryList.concat(newInventory);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(
      (inventory) => inventory.id === id
    )[0];
    this.setState({ selectedInventory: selectedInventory });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = (
        <EditInventoryForm
          inventory={this.state.selectedInventory}
          onEditInventory={this.handleEditingInventoryInList}
        />
      );
      buttonText = "Return to Inventory List";
    } else if (this.state.selectedInventory != null) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = (
        <NewInventoryForm
          onNewInventoryCreation={this.handleAddingNewInventoryToList}
        />
      );
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = (
        <InventoryList
          inventoryList={this.state.mainInventoryList}
          onInventorySelection={this.handleChangingSelectedInventory}
        />
      );
      // Because a user will actually be clicking on the inventory in the Inventory component, we will need to pass our new handleChangingSelectedInventory method as a prop.
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
