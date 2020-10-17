import { DATA_PROCESSING_COMPLETED } from "../actions/calendarAction";

const initState = {
    timelines: undefined,
};
export const calendarReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case DATA_PROCESSING_COMPLETED:
            return { ...state, timelines: action.payload };
        default:
            return state;
    }
};
