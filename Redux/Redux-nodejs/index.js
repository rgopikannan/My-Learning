const redux = require("redux");

let initialState = {
    age:20
}

let reducerFn = (state = initialState, action) => {
    let newState = {...state};
    if(action.type === "COUNTER_UP"){
        newState.age += action.value;
    }
    return newState;
};

var store = redux.createStore(reducerFn);

console.log("before... "+ JSON.stringify(store.getState()));
store.dispatch({ type:"COUNTER_UP",value:1});
store.dispatch({ type: "COUNTER_UP", value: 1 });
console.log("after..  " + JSON.stringify(store.getState()));