import React from "react";
import Inventory from "./Inventory";

const mainInventoryList = [
  {
    name: "Ethiopian Yirgacheffe",
    origin: "Ethiopia",
    price: "18.99",
    roast: "medium",
    remaining: "130",
  },
  {
    name: "Colombian Supremo",
    origin: "Colombia",
    price: "16.50",
    roast: "dark",
    remaining: "130",
  },
  {
    name: "Sumatra Mandheling",
    origin: "Indonesia",
    price: "17.25",
    roast: "dark",
    remaining: "130",
  },
];

function InventoryList() {
  return (
    <React.Fragment>
      <hr />
      {mainInventoryList.map((inventory, index) => (
        <Inventory
          names={inventory.names}
          origin={inventory.origin}
          price={inventory.price}
          roast={inventory.roast}
          remaining={inventory.remaining}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

export default InventoryList;
