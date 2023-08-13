import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenInventoryClicked(props.id)}>
        {/* We add a div with an onClick function. Don't forget to close out the div below! */}
        <h3>
          {props.name} - {props.origin}
        </h3>
        <p>
          Price: <em>${props.price}</em>
        </p>
        <p>Roast: {props.roast}</p>
        <p>Remaining: {props.remaining} pounds</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  remaining: PropTypes.number,
  id: PropTypes.string, // new PropType
  whenInventoryClicked: PropTypes.func, // new PropType
};

export default Inventory;
