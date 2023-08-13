import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm(props) {
  const { inventory } = props;

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({
      name: event.target.name.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      remaining: event.target.remaining.value,
      id: inventory.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditInventoryFormSubmission} /* new code */
        buttonText="Update Inventory"
      />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditInventory: PropTypes.func,
};

export default EditInventoryForm;
