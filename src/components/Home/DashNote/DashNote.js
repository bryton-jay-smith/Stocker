import React from "react";

// id={strain.id} 
// name={strain.name} 
// instock={strain.inStock}
// stocking={strain.isStocked}

function DashNote (props) {

  return (
    <div>
      {props.stocking ? (

        <button type="button" instock={props.inStock} data-toggle="modal" data-target={"#module" + props.id} className="list-group-item list-group-item-action dashNote">
        {props.name}

        <span className="badge badge-success">In Stock!</span>
        </button>
      ):(<div></div>)}
      </div>

  )
}

export default DashNote;