import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory, onClickingDelete, onClickingEdit, onSellingPound } = props;
  const { name, origin, price, roast, remaining } = inventory;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>
        {name} - {origin}
      </h3>
      <p>
        Price: <em>${price}</em>
      </p>
      <p>Roast: {roast}</p>
      <p>Remaining: {remaining} pounds</p>
      <button onClick={() => onSellingPound(inventory.id)}>
        Sell 1 Pound
      </button>{" "}
      <button onClick={onClickingEdit}>Update Inventory</button>
      <button onClick={() => onClickingDelete(inventory.id)}>
        Close Inventory
      </button>
      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onSellingPound: PropTypes.func, // Add new prop type
};

export default InventoryDetail;
