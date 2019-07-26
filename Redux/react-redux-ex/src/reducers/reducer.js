const { createStore } = Redux;

//initial state of the redux store
const initailState = {
  articles: []
}

//Redux says that the state is immutable and cannot change in place
function rootReducer(state = initailState, action){
  let newState = {};
  if(action.type === "ADD_ARTICLE"){
    newState = { ...state, articles: state.articles.concat(action.payload)};
    return newState;
  }
  return state;
}

//Redux says the only way to change the state is by sending a signal to the store.This signal is an action. “Dispatching an action” is the process of sending out a signal.
const addArticle = (payload)=>{
  return { type:"ADD_ARTICLE", payload }
}

const store = createStore(rootReducer);

console.dir(store.getState());