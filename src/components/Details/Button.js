import React from "react";
import Module from "./Module";

function Test() {
    return (
    <div>
        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        <Module />
    </div>
    )
}

export default Test;