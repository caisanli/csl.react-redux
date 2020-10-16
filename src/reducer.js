export default function(state, action) {
    state = state || {
        count: 0
    };
    switch(action.type) {
        case 'ADD':
            return Object.assign({}, state, {
                count: state.count + 1
            })
        default:
            return state;
    }
}