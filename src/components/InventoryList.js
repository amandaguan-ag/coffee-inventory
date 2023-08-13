import React from "react";
import Inventory from "./Inventory";

function InventoryList() {
  return (
    <Inventory
      name="Ethiopian Yirgacheffe"
      origin="Ethiopia"
      price="18.99"
      roast="medium"
      remaining="130"
    />
  );
}

export default InventoryList;
