import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory, onClickingDelete } = props; //new code

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>
        {inventory.location} - {inventory.names}
      </h3>
      <p>
        <em>{inventory.issue}</em>
      </p>
      <button onClick={() => onClickingDelete(inventory.id)}>
        Close Inventory
      </button>{" "}
      {/* new code */}
      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func, // new code
};

export default InventoryDetail;
