import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory, onClickingDelete } = props; //new code

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
      <button onClick={props.onClickingEdit}>Update Inventory</button>{" "}
      {/* new code */}
      <button onClick={() => props.onClickingDelete(inventory.id)}>
        Close Inventory
      </button>
      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func, // new code
};

export default InventoryDetail;
