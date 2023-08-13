import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import EditInventoryForm from "./EditInventoryForm";
import InventoryDetail from "./InventoryDetail";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedInventory != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false,
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
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({ mainInventoryList: newMainInventoryList });
    this.setState({ formVisibleOnPage: false });
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
      currentlyVisibleState = (
        <InventoryDetail
          inventory={this.state.selectedInventory}
          onClickingDelete={this.handleDeletingInventory}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Inventory List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
      );
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = (
        <InventoryList
          onInventorySelection={this.handleChangingSelectedInventory}
          inventoryList={this.state.mainInventoryList}
        />
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
