import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewInventoryForm(props) {
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
      <ReusableForm
        formSubmissionHandler={handleNewInventoryFormSubmission}
        buttonText="Sumbit"
      />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  onNewInventoryCreation: PropTypes.func,
};

export default NewInventoryForm;
