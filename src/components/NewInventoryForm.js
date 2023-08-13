import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewInventoryForm(props) {
  const availableBeans = [
    {
      name: "Colombian Arabica",
      origin: "Colombia",
      price: 12.99,
      roast: "medium",
    },
    {
      name: "Ethiopian Sidamo",
      origin: "Ethiopia",
      price: 14.5,
      roast: "light",
    },
    {
      name: "Sumatra Mandheling",
      origin: "Indonesia",
      price: 13.75,
      roast: "dark",
    },
    // Add more beans as needed
  ];

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    // Access the values of the input fields
    const { name, origin, price, roast } = event.target;

    // Create the new inventory object, setting the remaining value to 130 by default
    const newInventory = {
      id: v4(),
      name: name.value,
      origin: origin.value,
      price: parseFloat(price.value),
      roast: roast.value,
      remaining: 130, // Default remaining value
    };

    // Call the onNewInventoryCreation prop with the new inventory object
    props.onNewInventoryCreation(newInventory);
  }

  return (
    <React.Fragment>
      <h3>Available Coffee Beans:</h3>
      <ul>
        {availableBeans.map((bean, index) => (
          <li key={index}>
            {bean.name} | Origin: {bean.origin} | Price: ${bean.price} | Roast:{" "}
            {bean.roast}
          </li>
        ))}
      </ul>
      <form onSubmit={handleNewInventoryFormSubmission}>
        <input type="text" name="name" placeholder="Bean Names" required />
        <input type="text" name="origin" placeholder="Bean Origin" required />
        <input type="text" name="price" placeholder="Bean Price" required />
        <input
          type="text"
          name="roast"
          placeholder="Bean Roast (light, medium, or dark)"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func.isRequired,
};

export default NewInventoryForm;