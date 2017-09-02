import React , { Component } from 'react';
import { View , Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged , passwordChanged , loginUser } from '../actions';
import { Card , CardSection , Button , Spinner } from './common';
import Input from './Input';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email , password } = this.props;

		this.props.loginUser({ email , password });
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />
		}

		return (
			<Button onPress={ this.onButtonPress.bind(this) }>
				Log In
			</Button>
		);
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						label='Email' 
						placeholder='email@email.com'
						onChangeText={ this.onEmailChange.bind(this) }
						value={ this.props.email }
					/>
				</CardSection>

				<CardSection>
					<Input 
						label='Password'
						placeholder='password'
						secureTextEntry
						onChangeText={ this.onPasswordChange.bind(this) }
						value={ this.props.password }
					/>
				</CardSection>

				<CardSection>
					<Text style={{ color: 'red' , fontWeight: '600' , alignSelf: 'center' , fontSize: 20 }}>
						{ this.props.error }
					</Text>

					{ this.renderButton() }
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const { email , password , error , loading } = state.auth;

	return {
		email,
		password,
		error,
		loading
	};
};

export default connect(mapStateToProps, { emailChanged , passwordChanged , loginUser })(LoginForm);