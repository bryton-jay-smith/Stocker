import React from "react";

// id={strain._id} 
// name={strain.name} 
// inStock={strain.inStock}

function DashNote (props) {

  return (
    <button type="button" instock={props.inStock} data-toggle="modal" data-target={"#module" + props.id} className="list-group-item list-group-item-action dashNote">
      {props.name}
    </button>
  )
}

export default DashNote;