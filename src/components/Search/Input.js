import React from "react";

function Input() {
  return (
    <div className="Search">

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" />
          <div className="input-group-append">
            <button className="btn btn-success" type="submit"><i className="fas fa-search" /> </button>
          </div>
      </div>


    </div>
  );
}

export default Input;