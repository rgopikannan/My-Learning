export function itemIsLoading(bool){
    return{
        type:"ITEM_IS_LOADING",
        itemLoading: bool
    }
}

export function itemHasError(bool) {
    return {
        type: "ITEM_HAS_ERROR",
        itemError: bool
    }
}

export function itemLoadedSucess(items) {
    return {
        type: "ITEM_LOADED_SUCCESS",
        items
    }
}

export function itemsFetchData(url){
    return (dispatch)=>{
        dispatch(itemIsLoading(true));

        fetch(url)
        .then(function(response){
            if (!response.ok){
                throw Error(response.statusText);
            }
            dispatch(itemIsLoading(false));
            return response;
        })
        .then((response)=>response.json())
        .then((items) => dispatch(itemLoadedSucess(items)))
        .catch(() => dispatch(itemHasError(true)));
    }
}