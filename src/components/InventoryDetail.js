import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>
        {props.name} - {props.origin}
      </h3>
      <p>
        Price: <em>${props.price}</em>
      </p>
      <p>Roast: {props.roast}</p>
      <p>Remaining: {props.remaining} pounds</p>
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
};

export default InventoryDetail;
