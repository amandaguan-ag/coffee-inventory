import React, { useState } from "react";
import PropTypes from "prop-types";

function InventoryDetail(props) {
  const [poundsToSell, setPoundsToSell] = useState(0);
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
      <input
        type="number"
        value={poundsToSell}
        onChange={(e) => setPoundsToSell(e.target.value)}
      />
      <button onClick={() => onSellingPound(inventory.id, poundsToSell)}>
        Sell {poundsToSell} Pounds
      </button>
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
  onSellingPound: PropTypes.func,
};

export default InventoryDetail;
