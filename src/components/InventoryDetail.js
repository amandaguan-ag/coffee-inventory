import React, { useState } from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const [poundsToSell, setPoundsToSell] = useState(0);
  const { inventory, onClickingDelete, onClickingEdit, onSellingPound } = props;
  const { name, origin, price, roast, remaining } = inventory;

  return (
    <div className="w3-container w3-content" style={{ maxWidth: "700px" }}>
      <h5 className="w3-center w3-padding-48">
        <span className="w3-tag w3-wide">
          {name} - {origin}
        </span>
      </h5>
      <div className="w3-container w3-padding-48 w3-card">
        <p className="w3-text-grey">
          Price: <em>${price}</em>
        </p>
        <p>Roast: {roast}</p>
        <p>Remaining: {remaining} pounds</p>
        <div className="w3-row w3-center w3-card w3-padding">
          <div className="w3-col s6">
            <input
              type="number"
              className="w3-input"
              value={poundsToSell}
              onChange={(e) => setPoundsToSell(e.target.value)}
            />
          </div>
          <div className="w3-col s6">
            <button
              className="w3-button w3-blue"
              onClick={() => onSellingPound(inventory.id, poundsToSell)}
            >
              Sell {poundsToSell} Pounds
            </button>
          </div>
        </div>
        <button className="w3-button w3-yellow" onClick={onClickingEdit}>
          Update Inventory
        </button>
        <button
          className="w3-button w3-red"
          onClick={() => onClickingDelete(inventory.id)}
        >
          Close Inventory
        </button>
      </div>
    </div>
  );
}

InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onSellingPound: PropTypes.func,
};

export default InventoryDetail;
