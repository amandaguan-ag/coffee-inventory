import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name} - {props.origin}
      </h3>
      <p>
        Price: <em>${props.price}</em>
      </p>
      <p>Roast: {props.roast}</p>
      <p>Remaining: {props.remaining} pounds</p>
      <hr />
    </React.Fragment>
  );
}

Inventory.propTypes = {
  names: PropTypes.string.isRequired,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  remaining: PropTypes.number,
};

export default Inventory;
