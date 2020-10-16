export const createStore = function(reducer) {
    let state = null, subscribes = [];

    const dispatch = function(action) {
        var oldState = getState();
        state = reducer(state, action);
        if(state === oldState)
            return ;
        subscribes.forEach(function(callback) {
            callback();
        })
    }

    const getState = function() {
        return state;
    }

    const subscribe = function(callback) {
        subscribes.push(callback);
    }

    const unsubscribe = function(callback) {
        subscribes = subscribes.filter(sub => sub !== callback);
    }
    
    dispatch({});
    return { getState, dispatch, subscribe, unsubscribe }
}