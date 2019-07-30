import React from 'react';

// id={strain.id}
// name={strain.name}
// instock={strain.inStock}

function Results(props) {
    return (
        <button type="button" instock={props.inStock} data-toggle="modal" data-target={"#module" + props.id} className="list-group-item list-group-item-action dashNote">
            {props.name}
            {props.instock ? (
                <span className="badge badge-success">In Stock!</span>              
            ):(
                <span className="badge badge-danger">Out of stock</span>
            )}
        </button>
    )
}
export default Results;