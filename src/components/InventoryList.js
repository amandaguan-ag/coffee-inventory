import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InventoryList(props) {
  // Add props as parameter.
  return (
    <React.Fragment>
      <hr />
      {props.inventoryList.map(
        (
          inventory,
          index // Loop through the list passed down from InventoryControl.
        ) => (
          <Inventory
            name={inventory.name}
            origin={inventory.origin}
            price={inventory.price}
            roast={inventory.roast}
            remaining={inventory.remaining}
            key={index}
          />
        )
      )}
    </React.Fragment>
  );
}

// Add propTypes for inventoryList.
InventoryList.propTypes = {
  inventoryList: PropTypes.array,
};

export default InventoryList;
