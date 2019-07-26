import {Component} from "react";
import {connect} from "react-redux";
class ItemList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            <h2>Blog Post</h2>

        </div>);
    }
}

const mapStateToProps =(state)=>{
    return {
        items:state.items,
        itemLoading: state.itemLoading,
        itemError: state.itemError
    }
}

const mapDisptachToProps = (dispatch)=> {
    return {
        //dispatch(itemsFetchData(url));
    }
}

//export deafult connecet