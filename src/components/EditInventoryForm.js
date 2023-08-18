import React, { useState } from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditInventoryForm(props) {
  const { inventory } = props;

  const [formState, setFormState] = useState({
    name: inventory.name,
    origin: inventory.origin,
    price: inventory.price,
    roast: inventory.roast,
    remaining: inventory.remaining,
  });

  function handleFieldChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleEditInventoryFormSubmission(event) {
    event.preventDefault();
    props.onEditInventory({
      ...formState,
      id: inventory.id,
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formState={formState}
        onFieldChange={handleFieldChange}
        formSubmissionHandler={handleEditInventoryFormSubmission}
        buttonText="Update Inventory"
      />
    </React.Fragment>
  );
}

EditInventoryForm.propTypes = {
  onEditInventory: PropTypes.func,
  inventory: PropTypes.object,
};

export default EditInventoryForm;
