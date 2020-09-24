import { connect } from 'react-redux';


const initialState = {
    jwttoken: null,

};

 const updateStore = (state, updatedProperties) => {
    return {
        ...state,
        ...updatedProperties
    };
};



const authLogin = (state, action) => {
    return this.updateStore( state, { 
        jwttoken: action.token,
        userId: action.userId,
        userName: action.userName,
        imageUrl: action.imageUrl,
        userRole: action.userRole,
        userNick: action.userNick,
        error: null,
    } );      

};



const authError = (state, action) => {
    return this.updateStore( state, {
        error: action.error,
    });
};

const authLogout = (state, action) => {
    return this.updateStore(state, { jwttoken: null, userId: null });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ('AUTH_LOGIN'): return authLogin(state, action);
        case ('AUTH_LOGOUT'): return authLogout(state, action);
        case ('AUTH_ERROR'): return authError(state, action);

        default:
            return state;
    }
};


export default reducer;