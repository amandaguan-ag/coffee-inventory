import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="name" placeholder="Bean Names" />
        <input type="text" name="origin" placeholder="Bean Origin" />
        <input type="text" name="price" placeholder="Bean price" />
        <input type="text" name="roast" placeholder="Bean rosat" />
        <input type="text" name="remaining" placeholder="Bean remaining" />
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
