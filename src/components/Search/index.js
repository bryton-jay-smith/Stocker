import React from "react";
import "./style.css";
//import Input from "./Input";
import Results from "./Results";
import firebase from "../../firebase";
import Module from "../Details/Module";
//import DashNote from "../Home/DashNote";

const database = firebase.database();
const ref = database.ref('strains');

class Search extends React.Component {
  state = {
    strains: []
  };

  loadStrains = () => {
    ref.once('value')
      .then(res => this.setState({strains: res.val()}))
      .catch(err => console.log(err));
}

  componentDidMount() {
    this.loadStrains();
  };

  render() {
    return (
      <div className="page">
        {this.state.strains.map(strain => (
          <div>
            <Results
              id={strain.id}
              name={strain.name}
              instock={strain.inStock}
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
    )}
}

export default Search;