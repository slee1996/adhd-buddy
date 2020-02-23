const initialState = {
    user: {}
}

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

export function getUser(userObj){
    console.log('we are')
    return {
        type: GET_USER,
        payload: userObj
    }
}

export function logout(){
    console.log('Session Destroyed')
    return {
        type: LOGOUT,
        payload: null
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_USER:
            return {...state, user: payload}
            //{user: {}, user: {user_id: 1, user_email: 'email'}}
        case LOGOUT:
            return {...state, user: {}}
            //return initialState
        default:
            return state;
    }
};