import React from 'react';
import { View , Text , TextInput } from 'react-native';

const Input = ({ label , placeholder , secureTextEntry , value , onChangeText }) => {
	const { containerStyles , labelStyles , inputStyles } = styles;

	return (
		<View style={ containerStyles }>
			<Text style={ labelStyles }>{ label }</Text>
			<TextInput 
				style={ inputStyles } 
				placeholder={ placeholder }
				autoCorrect={ false } 
				secureTextEntry={ secureTextEntry }
				value={ value }
				onChangeText={ onChangeText }
			/>
		</View>
	);
};

const styles = {
	containerStyles: {
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10
	},
	labelStyles: {
		flex: 1,
		color: 'black',
		fontSize: 18
	},
	inputStyles: {
		flex: 2,
		color: 'black',
		fontSize: 18,
		lineHeight: 23,
		paddingRight: 20
	}
};

export default Input;