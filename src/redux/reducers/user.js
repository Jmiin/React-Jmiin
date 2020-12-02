const { ADD_USER } = require("../constants");

const user = (state = {},action) =>{
    switch (action.type) {
        case action.ADD_USER:
            state.push("a")
            return state;
    
        default:
            return state;
    }
}

export default user