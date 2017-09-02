import React from 'react';
import { TouchableOpacity , Text } from 'react-native';

const Button = ({ children , onPress }) => {
	const { containerStyles , textStyles } = styles;

	return (
		<TouchableOpacity style={ containerStyles } onPress={ onPress }>
			<Text style={ textStyles }>{ children }</Text>
		</TouchableOpacity>
	);
};

const styles = {
	containerStyles: {
		padding: 10,
		borderWidth: 2,
		borderColor: 'red',
		borderRadius: 10
	},
	textStyles: {
		color: 'red',
		alignSelf: 'center',
		fontWeight: '600',
		fontSize: 18
	}
};

export { Button };