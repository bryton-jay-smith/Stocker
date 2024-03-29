import React from "react";
import DashNote from "./DashNote/index";
import Module from "../Details/Module";
import firebase from '../../firebase';

const database = firebase.database();
const ref = database.ref('strains');

class Dash extends React.Component {
  state = {
    strains: []
  };

  loadStrains = () => {
    ref.once('value')
      .then(res => this.setState({strains: res.val()}))
      //.then(res => console.log(res.val()))
      .catch(err => console.log(err));
}

  componentDidMount() {
    this.loadStrains();
  };

  render() {
    return (
      <div className="dash">

        <div className="list-group">

          <div className="list-group-item list-group-item-action bg-dark text-white">Stocked Items</div>

       
          {this.state.strains.length ? (
                            <div>
                                {this.state.strains.map(strain => (
                                  <div className="strainItem">

                                  <DashNote 
                                  id={strain.id} 
                                  name={strain.name} 
                                  instock={strain.inStock}
                                  stocking={strain.isStocked}
                                  />   

                                  <Module
                                  id={strain.id}
                                  name={strain.name} 
                                  info={strain.information}
                                  instock={strain.inStock}
                                  date={strain.date}
                                  stocking={strain.isStocked}
                                  img={strain.imgUrl}
                                  /> 
                                  </div>
                     
                                ))}
                            </div>
                        ) : (
                                <h3>No results</h3>
                            )}

        </div>

      </div>
      
    )
  }

}

export default Dash;