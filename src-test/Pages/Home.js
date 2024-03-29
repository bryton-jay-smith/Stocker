import React from "react";
import Button from "./Components/Button";
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAX_gZ6crVt0L-IWe1ijWhTdt2IrLk0-OQ",
  authDomain: "stocker-71d5a.firebaseapp.com",
  databaseURL: "https://stocker-71d5a.firebaseio.com",
  projectId: "stocker-71d5a",
  storageBucket: "",
  messagingSenderId: "888784073703",
  appId: "1:888784073703:web:f6ff3b9c95771fed"
};

firebase.initializeApp(config);
const database = firebase.database();
const ref = database.ref('strains');

class Dash extends React.Component {
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
      <div className="dash">

        <div className="list-group-item list-group-item-action bg-dark text-white">Stocked Items</div>
       
        {this.state.strains.length ? (

          {this.state.strains.isStocked ? (

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
          ):(<h3>No Results</h3>)} 
        ):(<h3>No Results</h3>)}                                       

          

        
        


  

      </div>
      
    )
  }

}

export default Dash;





{/* {strain.isStocked ? (
                                  <Button
                                  id={strain.id}
                                  name={strain.name} 
                                  info={strain.information}
                                  instock={strain.inStock}
                                  date={strain.date}
                                  stocking={strain.isStocked}
                                  img={strain.imgUrl}
                                  />   

                                  ):(
                                  
                                  <h3>No results</h3>
                                  )
                                } */}