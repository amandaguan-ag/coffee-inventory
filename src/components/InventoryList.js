import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InventoryList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.inventoryList.map((inventory) => (
        <Inventory
          whenInventoryClicked={props.onInventorySelection}
          name={inventory.name}
          origin={inventory.origin}
          price={inventory.price}
          roast={inventory.roast}
          remaining={inventory.remaining}
          id={inventory.id}
          key={inventory.id}
        />
      ))}
    </React.Fragment>
  );
}

InventoryList.propTypes = {
  inventoryList: PropTypes.array,
  onInventorySelection: PropTypes.func,
};

export default InventoryList;
