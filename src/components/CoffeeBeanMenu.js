import React from "react";
import InventoryList from "./InventoryList";

function CoffeeBeanMenu() {
  // Sample data for coffee beans
  const coffeeBeans = [
    {
      id: "1",
      name: "Colombian Coffee",
      origin: "Colombia",
      price: 12.99,
      roast: "Medium",
    },
    {
      id: "2",
      name: "Ethiopian Yirgacheffe",
      origin: "Ethiopia",
      price: 14.99,
      roast: "Light",
    },
    {
      id: "3",
      name: "Brazilian Santos",
      origin: "Brazil",
      price: 10.99,
      roast: "Dark",
    },
    // ... more coffee beans
  ];

  return (
    <div className="coffee-bean-menu">
      <h2>Coffee Bean Menu</h2>
      <InventoryList inventoryList={coffeeBeans} />
    </div>
  );
}

export default CoffeeBeanMenu;
