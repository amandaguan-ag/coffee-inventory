import PropTypes from "prop-types";
import React, { useState } from "react";

function NewInventoryForm(props) {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");
  const [roast, setRoast] = useState("");
  const [remaining, setRemaining] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  const newInventory = {
    name: name,
    origin: origin,
    price: price,
    roast: roast,
    remaining: remaining,
  };
  props.onNewInventoryCreation(newInventory); // Call the prop function with the new inventory object
  setName("");
  setOrigin("");
  setPrice("");
  setRoast("");
  setRemaining(""); // Reset the form fields
};

  return (
    <div className="w3-container" style={{paddingBottom: "32px"}}>
      <div className="w3-content" style={{maxWidth: "700px"}}>
        <h5 className="w3-center w3-padding-48"><span className="w3-tag w3-wide">ADD NEW INVENTORY</span></h5>
        <form onSubmit={handleSubmit}>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name" value={name} onChange={(e) => setName(e.target.value)} /></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Origin" required name="Origin" value={origin} onChange={(e) => setOrigin(e.target.value)} /></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="Price" required name="Price" value={price} onChange={(e) => setPrice(e.target.value)} /></p>
          <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Roast" required name="Roast" value={roast} onChange={(e) => setRoast(e.target.value)} /></p>
          <p><button className="w3-button w3-black" type="submit">ADD INVENTORY</button></p>
        </form>
      </div>
    </div>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func.isRequired,
};

export default NewInventoryForm;
