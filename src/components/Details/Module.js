import React from "react";

// id={strain._id}
// name={strain.name} 
// info={strain.information}
// instock={strain.inStock}
// date={strain.date}

function Module(props) {
    return (
        <div id={"module" + props.id} className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"> {props.name} </h4>
                    </div>
                    <div className="modal-body">
                        <p> {props.info} </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Module;