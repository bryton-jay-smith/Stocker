import React from "react";
import firebase from "../../firebase";


class Module extends React.Component {

    Remove= (idnum) => {
        console.log("idnum");
        
        firebase.database().ref('strains/' + idnum ).set({
            isStocked: false
          });
    }

    componentDidMount() {
        
    }
    render () {
    return (
        <div id={"module" + this.props.id} className="modal fade" role="dialog">
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title"> {this.props.name} </h4>
                    </div>
                    <img className="itemImg" src={this.props.img} alt="Not avalible"/>
                    <div className="modal-body">
                        <p> {this.props.info} </p>
                    </div>
                    <div className="modal-footer">
                        {this.props.stocking ? (
                            <button id="remove" onClick={() => this.Remove.bind(this, this.props.id)} type="button" className="btn btn-danger">Stop Stocking</button>
                        ):(
                            <button id="add"  type="button" className="btn btn-success">Stock this!</button>
                        )}
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
}

export default Module;