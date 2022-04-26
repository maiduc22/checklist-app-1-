import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './style.css'
import { 	
	handleLoggin,
	handleUsername, 
	handlePassword 
} from '../../action/login'

const LoginForm = ()  => { 
	const dispatch = useDispatch()
	const history = useNavigate()
	const isLogged = useSelector((state) => state.user.isLogged)

	const handleLoginBtn = () => {
		dispatch(handleLoggin)
		history('/checklist')
	}
	const handleUsernameChange = (e) => {
		dispatch(handleUsername(e))
	}
	const handlePasswordChange = (e) => {
		dispatch(handlePassword(e))
	}

	// useEffect(() => {
	// 	if (isLogged) {
	// 	  history('/')
	// 	}
	// }, [isLogged, history])
	
	return (
		<div className="form-container">
		  <form className="form" autoComplete='false'>
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
		  <Button type='primary' className='btn-login' onClick={handleLoginBtn}>LOGIN</Button>
		</div>
	)
}
export default LoginForm
