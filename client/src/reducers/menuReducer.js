import { SHOW_MENU, HIDE_MENU } from "../actions/menuActions";

const initialState = {
    payload: false
}

const menuReducer = (state = initialState, action ) => {
    switch(action.type) {
        case SHOW_MENU:
            return {
                payload: {show: !state.payload.show}
            }
        case HIDE_MENU:
            return {
                payload: {show: action.payload}
            }
        default: return state;
    }
}

export default menuReducer