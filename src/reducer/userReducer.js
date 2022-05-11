import {
    LOGIN_USER_LOGGED,
    LOGIN_USER_USERNAME,
    LOGIN_USER_PASSWORD
} from '../constant/actions'

const initialState = {
    isLogged: false,
    username: '',
    password: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case LOGIN_USER_LOGGED:
        return {
          ...state,
          isLogged: !state.isLogged,
        }
      case LOGIN_USER_USERNAME:
        return {
          ...state,
          username: action.payload,
        }
      case LOGIN_USER_PASSWORD:
        return {
          ...state,
          password: action.payload  ,
        }
      default:
        return state
    }
  }