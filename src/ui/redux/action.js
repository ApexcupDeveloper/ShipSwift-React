import { SET_AUTO, SET_COMPANY_DATA, SET_COMPANY_LOGO, SET_DARK_THEME, SET_FROM, SET_LIGHT_THEME, SET_TO } from "./types";

export const switchTheme = (isDark) => (dispatch) => {
    if(isDark) {
        localStorage.setItem("theme", "dark");
        dispatch({
            type: SET_DARK_THEME,
            payload: null
        });
    } else {
        localStorage.setItem("theme", "light");
        dispatch({
            type: SET_LIGHT_THEME,
            payload: null
        });
    }
};

export const setAuto = (auto) => (dispatch) => {
    localStorage.setItem("auto", auto ? "true" : "false");
    dispatch({
        type: SET_AUTO,
        payload: auto
    });
};

export const setFrom = (fromTime) => (dispatch) => {
    localStorage.setItem("from", fromTime);
    dispatch({
        type: SET_FROM,
        payload: fromTime
    });
};

export const setTo = (toTime) => (dispatch) => {
    localStorage.setItem("to", toTime);
    dispatch({
        type: SET_TO,
        payload: toTime
    });
};

export const setCompanyData = (data) => (dispatch) => {
    dispatch({
        type: SET_COMPANY_DATA,
        payload: data
    })
}

export const setCompanyLogo = (data) => (dispatch) => {
    dispatch({
        type: SET_COMPANY_LOGO,
        payload: data
    })
}