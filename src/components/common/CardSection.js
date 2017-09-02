import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children , style }) => {
	return (
		<View style={ [styles.containerStyles , style] }>
			{ children }
		</View>
	);
};

const styles = {
	containerStyles: {
		borderColor: 'black',
		borderWidth: 1,
		padding: 5
	}
};

export { CardSection };