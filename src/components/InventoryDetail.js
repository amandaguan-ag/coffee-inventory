import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const { inventory } = props;

  return (
    <React.Fragment>
      <h1>Inventory Detail</h1>
      <h3>
        {inventory.location} - {inventory.names}
      </h3>
      <p>
        Price: <em>${props.price}</em>
      </p>
      <p>Roast: {props.roast}</p>
      <p>Remaining: {props.remaining} pounds</p>
      <hr />
    </React.Fragment>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
};

export default InventoryDetail;
