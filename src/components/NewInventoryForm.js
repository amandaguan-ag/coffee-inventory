import React, { useState } from "react";
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

  const [selectedBean, setSelectedBean] = useState(null);

  function handleBeanSelection(bean) {
    setSelectedBean(bean);
  }

  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    const newInventory = {
      id: v4(),
      name: selectedBean.name,
      origin: selectedBean.origin,
      price: selectedBean.price,
      roast: selectedBean.roast,
      remaining: 130,
    };
    props.onNewInventoryCreation(newInventory);
  }

  return (
    <React.Fragment>
      <h3>Available Coffee Beans:</h3>
      <form onSubmit={handleNewInventoryFormSubmission}>
        {availableBeans.map((bean, index) => (
          <div key={index}>
            <input
              type="radio"
              name="bean"
              value={index}
              onChange={() => handleBeanSelection(bean)}
            />
            {bean.name} | Origin: {bean.origin} | Price: ${bean.price} | Roast:{" "}
            {bean.roast}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func.isRequired,
};

export default NewInventoryForm;
