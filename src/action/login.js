import {
    LOGIN_USER_LOGGED,
    LOGIN_USER_USERNAME,
    LOGIN_USER_PASSWORD
} from '../constant/actions'

export const handleLoggin = () => (
    {
        type: LOGIN_USER_LOGGED,
    }
)

export const handleUsername = (e) => ({
    type: LOGIN_USER_USERNAME,
    payload: e.target.value
})

export const handlePassword = (e) => ({
    type: LOGIN_USER_PASSWORD,
    payload: e.target.value
})