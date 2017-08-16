import { OPEN_SIDE_MENU } from "../constants";

const openSideMenu = (state = false, action) => {
    switch (action.type) {
        case OPEN_SIDE_MENU:
            return action.flag;
        default:
            return state
    }
};

export default openSideMenu