import * as types from "./types";
import initialState from "./initialState"

export const themeReducer = (state = initialState.theme, action) => {
    switch (action.type) {

        case types.SET_DARK_THEME:
            return {
                ...state,
                isDark: true
            };
        case types.SET_LIGHT_THEME:
            return {
                ...state,
                isDark: false
            };
        case types.SET_AUTO:
            return {
                ...state,
                auto: action.payload
            };
        case types.SET_FROM:
            return {
                ...state,
                from: action.payload
            };
        case types.SET_TO:
            return {
                ...state,
                to: action.payload
            };
        default:
            return state;
    }
}


export const companyReducer = (state = initialState.companyData, action) => {
    switch (action.type) {
        case types.SET_COMPANY_DATA:
            return {
                ...state,
                company: action.payload
            };
        case types.SET_COMPANY_LOGO:
            return {
                ...state,
                logo: action.payload
            };
        default:
            return state;
    }
}
