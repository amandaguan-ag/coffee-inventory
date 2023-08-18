import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { formState, onFieldChange } = props; // Destructure the props

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Bean Names"
          value={formState.name} // Use the formState values
          onChange={onFieldChange} // Handle changes using onFieldChange
        />
        <input
          type="text"
          name="origin"
          placeholder="Bean Origin"
          value={formState.origin}
          onChange={onFieldChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Bean Price"
          value={formState.price}
          onChange={onFieldChange}
        />
        <input
          type="text"
          name="roast"
          placeholder="Bean Roast"
          value={formState.roast}
          onChange={onFieldChange}
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}


ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
