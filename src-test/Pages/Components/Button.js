import React from 'react';

// id={strain.id}
// name={strain.name} 
// info={strain.information}
// instock={strain.inStock}
// date={strain.date}
// stocking={strain.isStocked}
// img={strain.imgUrl}

function Button(props) {
    return (
      <div className="strainItem">

        <button type="button" instock={props.inStock} data-toggle="modal" data-target={"#module" + props.id} className="list-group-item list-group-item-action dashNote">
            {props.name}
            {props.instock ? (
                <span className="badge badge-success">In Stock!</span>              
            ):(
                <span className="badge badge-danger">Out of stock</span>
            )}
        </button>

        <div id={"module" + props.id} className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"> {props.name} </h4>
                    </div>
                    <img className="itemImg" src={props.img} alt="Not avalible"/>
                    <div className="modal-body">
                        <p> {props.info} </p>
                    </div>
                    <div className="modal-footer">
                        {props.stocking ? (
                            <button type="button" className="btn btn-danger">Stop Stocking</button>
                        ):(
                            <button type="button" className="btn btn-success">Stock this!</button>
                        )}
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>


        </div>
    )
}
export default Button;