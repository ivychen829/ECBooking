export const state = () => ({
    isLogin: false,
    currentType: "",
})

export const getters = {
    getCurrentType: state => () => state.currentType
}

export const mutations = {
    SET_LOGIN_STATE(state, value) {
        console.log("SET_LOGIN_STATE", value);
        state.isLogin = value;
    },
    SET_CURRENT_TYPE(state, value) {
        console.log("SET_CURRENT_TYPE", value);
        state.currentType = value;
    }
}