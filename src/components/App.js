import React from "react";
import Header from "./Header";
import CoffeeBeanMenu from "./CoffeeBeanMenu"; // Import the CoffeeBeanMenu component
import InventoryControl from "./InventoryControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <CoffeeBeanMenu /> {/* Include the CoffeeBeanMenu component */}
      {/* Other components or content can go here */}
      <InventoryControl />
    </React.Fragment>
  );
}

export default App;
