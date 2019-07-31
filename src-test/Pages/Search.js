import React from "react";
import Button from "./Components/Button";
import firebase from "firebase";

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
      <div>
        {this.state.strains.map(strain => (
          <Button
          id={strain.id}
          name={strain.name} 
          info={strain.information}
          instock={strain.inStock}
          date={strain.date}
          stocking={strain.isStocked}
          img={strain.imgUrl}
          />                     
        ))}
      </div>        

      </div>
    )}
}

export default Search;