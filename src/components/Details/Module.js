import React from "react";
import firebase from "../../firebase";


class Module extends React.Component {

    constructor() {
        super();
        this.Remove = this.Remove.bind(this);
        this.Add = this.Add.bind(this);
      }
     
            // let id=  this.props.id;
            // let name=  this.props.name;
            // let info= this.props.informatio;
            // let instock= this.props.stocking;
            // let date= this.props.date;
            // let isStocked= this.props.isStocked;
      
     

    Remove = () => {
        let id=  this.props.id;
        let name=  this.props.name;
        let info= this.props.info;
        let instock= this.props.instock;
        let date= this.props.date;
        let img= this.props.img;
        //let isStocked= this.props.isStocked;
        firebase.database().ref('strains/' + id ).set({
            id: id,
            name: name ,
            information:info,
            inStock:instock,
            date:date,
            imgUrl: img,
            isStocked: false
          });
          this.forceUpdate();
    }

    Add = () => {
        let id=  this.props.id;
        let name=  this.props.name;
        let info= this.props.info;
        let instock= this.props.instock;
        let date= this.props.date;
        let img= this.props.img;
        //let isStocked= this.props.isStocked;
        firebase.database().ref('strains/' + id ).set({
            id: id,
            name: name ,
            information:info,
            inStock:instock,
            date:date,
            imgUrl: img,
            isStocked: true
          });
          this.forceUpdate();
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
                            <button id="remove" onClick={() => this.Remove()} type="button" className="btn btn-danger">Stop Stocking</button>
                        ):(
                            <button id="add"  onClick={() => this.Add()} type="button" className="btn btn-success">Stock this!</button>
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