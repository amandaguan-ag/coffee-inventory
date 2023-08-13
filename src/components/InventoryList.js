import React from "react";
import Inventory from "./Inventory";

function InventoryList() {
  return (
    <div>
      <Inventory
        name="Ethiopian Yirgacheffe"
        origin="Ethiopia"
        price="18.99"
        roast="medium"
        remaining="130"
      />
      <Inventory
        name="Colombian Supremo"
        origin="Colombia"
        price="16.50"
        roast="dark"
        remaining="130"
      />
    </div>
  );
}

export default InventoryList;
