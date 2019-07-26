export function itemLoading(state,action){
    switch(action.type){
        case "ITEM_IS_LOADING":
            return state.itemLoading;
        default:
            return state;
    }
}

export function itemError(state, action) {
    switch (action.type) {
        case "ITEM_HAS_ERROR":
            return state.itemError;
        default:
            return state;
    }
}

export function itemSuccess(state, action) {
    switch (action.type) {
        case "ITEM_LOADED_SUCCESS":
            return state.items;
        default:
            return state;
    }
}