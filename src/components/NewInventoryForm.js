import React from "react";
import PropTypes from "prop-types"; //import PropTypes
import { v4 } from "uuid"; // new code

function NewInventoryForm(props) {
  // Make sure to add props as a parameter.
  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      origin: event.target.roast.value,
      price: event.target.remaining.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewInventoryFormSubmission}>
        <input type="text" name="name" placeholder="Bean Names" />
        <input type="text" name="origin" placeholder="Bean Origin" />
        <input type="text" name="price" placeholder="Bean price" />
        <input type="text" name="roast" placeholder="Bean rosat" />
        <input type="text" name="remaining" placeholder="Bean remaining" />
        <button type="submit">Add</button>
      </form>
    </React.Fragment>
  );
}

// We also need to add PropTypes for our new prop.

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func,
};

export default NewInventoryForm;
