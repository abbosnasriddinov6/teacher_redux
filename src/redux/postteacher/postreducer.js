import { POST_DATA } from "./posttype";

const initialState = {
    postData: null
};

const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case POST_DATA:
            return {
                ...state,
                postData: action.payload
            };
            default:
                return state;
    }
};

export default reducer