import React from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";


function Detail() {
    return <h1>Detail</h1>;
    
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id }
     }
    } = ownProps;
    console.log(id);
        return { toDos:state.find(toDo => toDo.id === id) };
}

export default connect(mapStateToProps)(Detail);