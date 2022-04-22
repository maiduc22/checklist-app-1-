import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'antd';

import { handleLoggin, handleUsername, handlePassword } from '../../action/login'

const LoginForm = ()  => { 
	const dispatch = useDispatch

	const handleLoginBtn = () => {
		dispatch(handleLoggin)
	}

	const handleUsernameChange = (e) => {
		dispatch(handleUsername(e.target.value))
	}
	const handlePasswordChange = (e) => {
		dispatch(handlePassword(e.target.value))
	}

	return (
		<div className="form-container">
		  <form className="form">
			 <input
				className="username-input"
				type="text"
				placeholder="Username"
				required
				onChange={handleUsernameChange}
			 />
			 <input
				className="password-input"
				type="password"
				placeholder="Password"
				required
				onChange={handlePasswordChange}
			 />
		  </form>
		  <Button className='btn-login' onClick={handleLoginBtn}>LOGIN</Button>
		</div>
	)
}
export default LoginForm
