import React from "react";

function NewInventoryForm() {
  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.origin.value);
    console.log(event.target.price.value);
    console.log(event.target.roast.value);
    console.log(event.target.remaining.value);
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

export default NewInventoryForm;
