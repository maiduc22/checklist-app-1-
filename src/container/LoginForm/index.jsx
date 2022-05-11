import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Form, Input, Checkbox, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './style.css'
import { 	
	handleLoggin,
	handleUsername, 
	handlePassword 
} from '../../action/login'

import {IoMdPersonAdd} from 'react-icons/io';

import Icon from '../../core/Icon';
import ButtonCustom from '../../core/Button';

const LoginForm = ()  => { 
	const dispatch = useDispatch()
	const history = useNavigate()

	const handleLoginBtn = () => {
		dispatch(handleLoggin)
		history('/checklist')
		message.success("Login Successfully")
	}
	const handleUsernameChange = (e) => {
		dispatch(handleUsername(e))
	}
	const handlePasswordChange = (e) => {
		dispatch(handlePassword(e))
	}
	const onFinish = (values) => {
		console.log('Received values of form: ', values)
	}
	
	return (
		<div className='login-container'>	
			<div className="loginform-wrapper">
				<div className='form-wrapper'>
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: false,
						}}
						onFinish={onFinish}
					>
						<h1>Welcome back to Checklist App</h1>
						<p>It's great to have you back!</p>

						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: 'Please input your Username!',
								}
							]}
						>
							<Input 
								prefix={<UserOutlined className="site-form-item-icon" />} 
								placeholder="Username"
								onChange={handleUsernameChange}
							/>
						</Form.Item>

						<Form.Item 
							name="password"
							rules={[
								{
									required: true,
									message: 'Please input your Password!',
								},
							]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="Password"
								onChange={handlePasswordChange}
							/>
						</Form.Item>

						<div className='action-wrapper'>
								<a href="" className='login-action' style={{color: '#035397'}}>
									Forgot password?
								</a>
						</div>

						<div className='login-btn-wrapper'>
							<ButtonCustom
								className='btn-login'
								type='primary'
								onClick={handleLoginBtn}
                                content = 'Log In'
							>	
							</ButtonCustom>

							<ButtonCustom
								className='btn-newacc'
								type='secondary'
								content='Create Account'
                                icon={<IoMdPersonAdd/>}
							>	    
							</ButtonCustom>
						</div>
					</Form>
				</div>
			</div>
		</div>
	)
}
export default LoginForm
