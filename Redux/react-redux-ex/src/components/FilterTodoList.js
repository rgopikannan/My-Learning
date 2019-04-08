import React, {Component} from "react";

class FilterTodoList extends Component{

    render(){
        return(
            <div>
                <span>Filter Todo: </span>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        );
    }

}

export default FilterTodoList;