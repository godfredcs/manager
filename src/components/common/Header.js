import React from 'react';
import { View , Text } from 'react-native';

const Header = ({ headerText }) => {
	const { containerStyles , textStyles } = styles;

	return (
		<View style={ containerStyles }>
			<Text style={ textStyles }>{ headerText }</Text>
		</View>
	);
};

const styles = {
	containerStyles: {
		height: 80,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 5,
		position: 'relative'
	},
	textStyles: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '600'
	}
};

export { Header };